import * as C from "./styles";
import { ModalType } from "../../types/componentsTypes";
export const Modal = ({ message, onClick }: ModalType) => {
  return (
    <C.Modal>
      <div className="content">
        {message}
        <button onClick={onClick}>X</button>
      </div>
    </C.Modal>
  );
};
