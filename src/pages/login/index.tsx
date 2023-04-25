import { Button } from "../../components/button";
import { Input } from "../../components/input";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <C.Container>
      <C.LeftSide>
        <p className="text-primary">ComplimentHUB</p>
        <p>A website to compliments</p>
      </C.LeftSide>
      <C.RightSide>
        <C.Form>
          <h1>Hello</h1>
          <p>Sing up to get started</p>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
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
