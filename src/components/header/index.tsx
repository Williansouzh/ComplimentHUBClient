import { UserType } from "../../types/userType";
import * as C from "./styles";

export const Header = ({ user }: UserType) => {
  return (
    <C.Header>
      <C.Nav>
        <div>
          <p>{user.name}</p>
          <p>
            {user.age} - {user.post}
          </p>
          <p>{user.email}</p>
        </div>
        <div>log out</div>
      </C.Nav>
    </C.Header>
  );
};
