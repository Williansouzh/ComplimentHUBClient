import axios from "axios";
import { RegisterNewUser } from "./types/StatesTypes";
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
});

export const api = {
  registerNewUser: async (RegisterNewUser: RegisterNewUser) => {
    axiosInstance.post("/register", {
      name: RegisterNewUser.name,
      age: RegisterNewUser.age,
      post: RegisterNewUser.post,
      email: RegisterNewUser.email,
      password: RegisterNewUser.password,
    });
  },
};
