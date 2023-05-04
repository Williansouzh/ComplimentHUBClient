import { useEffect, useState } from "react";
import { Dashboard } from "../../components/features/dashboard";
import { Header } from "../../components/header";
import { useAppSelector } from "../../redux/hooks/useAppSelectors";
import * as C from "./styles";
import { Modal } from "../../components/features/modal";
import { useNavigate } from "react-router-dom";
import { CreateComplimnet } from "../../components/features/createCompliment";
import { Employer } from "../../types/userType";
import { api } from "../../api";
import { useDispatch } from "react-redux";

export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const [showModal, setShowModal] = useState({
    showModal: false,
    message: "example",
  });

  const [employers, setEmployers] = useState<Employer[]>([]);

  useEffect(() => {
    async function updateScreen() {
      const updatedEmployers = await api.list();
      setEmployers(updatedEmployers);

      if (user.user && user.user.email !== "") {
        setShowModal({
          ...showModal,
          showModal: false,
        });
      } else {
        setShowModal({
          ...showModal,
          showModal: true,
          message: "You are disconnected!!",
        });
      }
    }

    updateScreen();
  }, [user.user]);

  return (
    <C.Container>
      <>
        {showModal.showModal ? (
          <Modal
            message={showModal.message}
            onClick={() => {
              navigate("/");
              setShowModal({
                ...showModal,
                showModal: false,
              });
            }}
          />
        ) : null}
        <Header user={user.user} />
        <CreateComplimnet />
        <Dashboard />
      </>
    </C.Container>
  );
};
