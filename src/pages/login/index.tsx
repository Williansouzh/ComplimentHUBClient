import { useState, useEffect } from "react";
import { Button } from "../../components/features/button";
import { Input } from "../../components/features/input";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import { Modal } from "../../components/features/modal";
import { useDispatch } from "react-redux";
import { setname } from "../../redux/hooks/reducers/useReducer";
export const LoginPage = () => {
  const dispatch = useDispatch();
  const [errorLogin, setErrorlogin] = useState<boolean>(false);
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  //show mnodal state
  const [showModal, setShowModal] = useState({
    showModal: false,
    message: "Example",
  });

  //teste>
  const navigate = useNavigate();

  //funcitons
  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    if (!loginState.email || !loginState.password) {
      setShowModal({
        ...showModal,
        showModal: true,
        message: "Please enter your email and password",
      });
      return;
    }
    try {
      const login = await api.login(loginState.email, loginState.password);
      if (login.status) {
        dispatch(setname(login.user));
        navigate("/homepage");
      } else {
        setShowModal({
          ...showModal,
          showModal: true,
          message: "Email or password incorrect",
        });
        console.log(login.status);
        setErrorlogin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeLogonHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ): void => {
    setLoginState({
      ...loginState,
      [key]: event.target.value,
    });
    setErrorlogin(false);
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
        <p className="text-primary">ComplimentHUB</p>
        <p>A website to compliments</p>
      </C.LeftSide>
      <C.RightSide>
        <C.Form onSubmit={onSubmitHandler}>
          <h1>Hello</h1>
          <p>Sing up to get started</p>
          <Input
            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeLogonHandler(e, "email")
            }
            value={loginState.email}
            type="email"
            placeholder="Email"
            className={errorLogin ? "err" : ""}
          />
          <Input
            onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeLogonHandler(e, "password")
            }
            value={loginState.password}
            type="password"
            placeholder="Password"
            className={errorLogin ? "err" : ""}
          />
          <Button primary text="Login" />
          <p
            className="link"
            onClick={() => navigate("/register")}
            onKeyDown={(e) => e.key === "Enter" && navigate("/register")}
            onKeyUp={(e) => e.key === "Enter" && navigate("/register")}
          >
            Sign Up
          </p>
        </C.Form>
      </C.RightSide>
    </C.Container>
  );
};
