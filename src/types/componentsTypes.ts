export type ButtonType = {
  text: string;
  primary?: boolean;
};
export type InpuType = {
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type: string;
  placeholder?: string;
  className?: string;
};

export type ModalType = {
  message: string;
  onClick?: () => void;
};
