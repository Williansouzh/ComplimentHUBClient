import { useState } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import * as C from "./styles";
import { RegisterNewUser } from "../../types/StatesTypes";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/modal";
export const RegisterPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [registerState, setRegisterState] = useState<RegisterNewUser>({
    name: "",
    age: "",
    post: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //functions

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.registerNewUser(registerState);
      setShowModal(true);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
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
      {showModal && (
        <Modal
          message="Account created with sucess"
          onClick={() => setShowModal(false)}
        />
      )}
      <C.LeftSide>
        <C.NewUser>
          <h1 className="text-primary">{registerState.name}</h1>
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
            onChangeHandler={(event) => handleChangeRegister(event, "name")}
            type="text"
            placeholder="Name"
          />
          <Input
            type="number"
            value={registerState.age}
            onChangeHandler={(event) => {
              handleChangeRegister(event, "age");
            }}
            placeholder="Age"
          />
          <Input
            type="text"
            value={registerState.age}
            onChangeHandler={(event) => {
              handleChangeRegister(event, "post");
            }}
            placeholder="Post"
          />
          <Input
            type="text"
            value={registerState.age}
            onChangeHandler={(event) => {
              handleChangeRegister(event, "email");
            }}
            placeholder="Email"
          />
          <Input
            type="password"
            value={registerState.age}
            onChangeHandler={(event) => {
              handleChangeRegister(event, "password");
            }}
            placeholder="Password"
          />
          <Input
            type="password"
            value={registerState.age}
            onChangeHandler={(event) => {
              handleChangeRegister(event, "confirmPassword");
            }}
            placeholder="Confirm Password"
          />
          <Button primary text="Login" />
        </C.Form>
      </C.RightSide>
    </C.Container>
  );
};
