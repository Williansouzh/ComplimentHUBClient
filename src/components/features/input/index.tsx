import { InpuType } from "../../../types/componentsTypes";
import * as C from "./styles";
export const Input = ({
  type,
  placeholder,
  onChangeHandler,
  className,
}: InpuType) => {
  return (
    <C.Input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
