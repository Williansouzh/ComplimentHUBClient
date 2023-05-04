import { ButtonType } from "../../../types/componentsTypes";
import * as C from "./styles";
export const Button = ({ text, primary = false }: ButtonType) => {
  return <C.Button primary={primary}>{text}</C.Button>;
};
