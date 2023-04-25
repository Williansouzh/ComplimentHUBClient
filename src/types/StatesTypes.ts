export type RegisterNewUser = {
  name: string;
  age: string;
  post: string;
  email: string;
  password: string;
  confirmPassword: string;
  passwordMatch?: boolean;
};
