import { useEffect, useState } from "react";
import { Button } from "../../components/features/button";
import { Input } from "../../components/features/input";
import * as C from "./styles";
import { RegisterNewUser } from "../../types/StatesTypes";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/features/modal";
export const RegisterPage = () => {
  const [showModal, setShowModal] = useState({
    showModal: false,
    message: "Example",
  });
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const [registerState, setRegisterState] = useState<RegisterNewUser>({
    name: "",
    age: "",
    post: "",
    email: "",
    password: "",
    confirmPassword: "",
    passwordMatch: false,
  });
  useEffect(() => {
    if (registerState.password === registerState.confirmPassword) {
      setRegisterState((prevState) => ({
        ...prevState,
        passwordMatch: true,
      }));
      setPasswordError(false);
    } else {
      setRegisterState((prevState) => ({
        ...prevState,
        passwordMatch: false,
      }));
      setPasswordError(true);
    }
  }, [registerState.password, registerState.confirmPassword]);
  //functions

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      registerState.name !== "" &&
      registerState.age !== "" &&
      registerState.email !== "" &&
      registerState.post !== ""
    ) {
      if (!passwordError) {
        try {
          await api.registerNewUser(registerState);
          setShowModal({
            ...showModal,
            showModal: true,
            message: "Your account has created with sucess :)",
          });
          setTimeout(() => {
            navigate("/");
          }, 1800);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      setShowModal({
        ...showModal,
        showModal: true,
        message: "fill in all the data",
      });
    }
  };

  const handleChangeRegister = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ): void => {
    setRegisterState({
      ...registerState,
      [key]: event.target.value,
    });
  };
  return (
    <C.Container>
      {showModal.showModal && (
        <Modal
          message={showModal.message}
          onClick={() => setShowModal({ ...showModal, showModal: false })}
        />
      )}
      <C.LeftSide>
        <C.NewUser>
          <h1 className="text-primary">{registerState.name}</h1>
          <h1>env: {process.env.TEXT}</h1>
          <p>Email: {registerState.email} </p>
          <p>Age {registerState.age}</p>
          <p>Post: {registerState.post}</p>
        </C.NewUser>
      </C.LeftSide>
      <C.RightSide>
        <C.Form onSubmit={onSubmitHandler}>
          <h1>Hello</h1>
          <p>Sing up to get started</p>
          <Input
            value={registerState.name}
            onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeRegister(event, "name")
            }
            type="text"
            placeholder="Name"
          />
          <Input
            type="number"
            value={registerState.age}
            onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeRegister(event, "age");
            }}
            placeholder="Age"
          />
          <Input
            type="text"
            value={registerState.age}
            onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeRegister(event, "post");
            }}
            placeholder="Post"
          />
          <Input
            type="text"
            value={registerState.age}
            onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeRegister(event, "email");
            }}
            placeholder="Email"
          />
          <Input
            type="password"
            value={registerState.age}
            onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeRegister(event, "password");
            }}
            placeholder="Password"
            className={passwordError ? "err" : ""}
          />
          <Input
            type="password"
            value={registerState.age}
            onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChangeRegister(event, "confirmPassword");
            }}
            placeholder="Confirm Password"
            className={passwordError ? "err" : ""}
          />
          <Button primary text="Login" />
        </C.Form>
      </C.RightSide>
    </C.Container>
  );
};
