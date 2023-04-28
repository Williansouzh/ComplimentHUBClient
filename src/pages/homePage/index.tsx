import { useEffect, useState } from "react";
import { Dashboard } from "../../components/features/dashboard";
import { Header } from "../../components/header";
import { useAppSelector } from "../redux/hooks/useAppSelectors";
import * as C from "./styles";
import { UserType } from "../../types/userType";

export const HomePage = () => {
  const user = useAppSelector((state) => state.user);
  //set showmodal when user isn´t logged
  const [showModal, setShowModal] = useState({
    showModal: false,
    message: "Example",
  });

  //useEffect to check user logged
  useEffect(() => {
    if (!user.user) {
      console.log(user.user);
      setShowModal({
        ...showModal,
        showModal: false,
        message: "You are disconnected",
      });
    } else {
      setShowModal({
        ...showModal,
        showModal: true,
        message: "You are disconnected",
      });
    }
  }, [user.user]);
  return (
    <C.Container>
      <>
        <Header user={user.user} />
        <Dashboard />
      </>
    </C.Container>
  );
};
