import axios from "axios";
import { RegisterNewUser } from "./types/StatesTypes";
import { Enviroment } from "./environment/inde";
import { UserType } from "./types/userType";
import { complimentType } from "./types/complimentType";

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
      console.log("url da imagem");
      return {
        status: true,
        user: { ...user },
      };
    } catch (error) {
      console.error(error);
      return {
        status: false,
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
    return response.data.response;
  },
  uploadImage: async (formData: FormData) => {
    await axiosInstance.post("/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  //compliments
  listCompliments: async () => {
    const response = await axiosInstance.get("/compliments");
    console.log("Resposta API: ", response.data);
    return response.data.compliments;
  },
  createNewCompliment: async (compliment: complimentType) => {
    await axiosInstance.post("/addcompliment", {
      compliment: compliment.compliment,
      date: compliment.date,
      department: compliment.department,
      id: compliment.id,
      receiver: compliment.receiver,
      sender: compliment.sender,
    });
  },
  addLike: async (id: number, liked: boolean) => {
    try {
      await axiosInstance.put("/likepost", {
        id: id,
        liked: liked,
      });
    } catch (error) {
      console.log("Error to generate like API ", error);
    }
  },
};
