import axios from "axios";
import { RegisterNewUser } from "./types/StatesTypes";
import { Enviroment } from "./environment/inde";

const axiosInstance = axios.create({
  baseURL: Enviroment.BASE_URL as string,
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
