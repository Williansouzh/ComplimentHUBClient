import { InpuType } from "../../types/componentsTypes";
import * as C from "./styles";
export const Input = ({ type, placeholder, onChangeHandler }: InpuType) => {
  return (
    <C.Input type={type} placeholder={placeholder} onChange={onChangeHandler} />
  );
};
