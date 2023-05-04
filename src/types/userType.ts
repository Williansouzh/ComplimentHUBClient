export type UserType = {
  user: {
    name: string;
    age: number;
    post: string;
    email: string;
    password?: string;
  };
};

export interface Employer {
  name: string;
  age: number;
  post: string;
  email: string;
  password?: string;
  id?: number;
}
