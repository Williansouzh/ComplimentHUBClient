import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hooks/useAppSelectors";
import { UserType } from "../../types/userType";
import * as C from "./styles";
import { setname } from "../../redux/hooks/reducers/useReducer";
import { useNavigate } from "react-router-dom";
export const Header = ({ user }: UserType) => {
  const navigate = useNavigate();

  const userlogged = useAppSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(
      setname({
        user: {
          name: "",
          age: 0,
          post: "",
          email: "",
          password: "",
        },
      })
    );

    navigate("/");
  };
  return (
    <C.Header>
      <C.Nav>
        <C.ProfileImg>
          <div className="img-container">
            <div className="img" />
          </div>
          <div>
            <p className="profileName">{userlogged.name}</p>
            <p>
              {userlogged.age} - {userlogged.post}
            </p>
            <p>{userlogged.email}</p>
          </div>
        </C.ProfileImg>
        <button onClick={logout}>Log out</button>
      </C.Nav>
    </C.Header>
  );
};
