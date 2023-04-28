import axios from "axios";
import { RegisterNewUser } from "./types/StatesTypes";
import { Enviroment } from "./environment/inde";
import { UserType } from "./types/userType";

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
  login: async (
    email: string,
    password: string
  ): Promise<{ status: boolean; user?: UserType }> => {
    try {
      const response = await axiosInstance.post("/login", { email, password });
      const { token, status, user } = response.data;
      localStorage.setItem("token", token);
      console.error(status);
      return {
        status: true,
        user,
      };
    } catch (error) {
      console.error(error);
      return {
        status: true,
      };
    }
  },
  list: async () => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get("/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.list;
  },
};
