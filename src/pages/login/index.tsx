import { Button } from "../../components/button";
import { Input } from "../../components/input";
import * as C from "./styles";
export const LoginPage = () => {
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
          <a href="/register" className="singUpLink">
            Sing Up
          </a>
        </C.Form>
      </C.RightSide>
    </C.Container>
  );
};
