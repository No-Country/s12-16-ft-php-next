import { axiosClient } from "./axiosClient";

//Users Crud

export const registerUser = async (userData) => {
  const result = await axiosClient.post("/users", userData);
  return result.data;
};

export const loginUser = async (userData) => {
  const result = await axiosClient.post("/users/login", userData);
  return result.data;
};
