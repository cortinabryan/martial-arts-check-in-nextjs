import { Axios } from "./axios";

export const getAllHistories = async () => {
  const response = await Axios.get("/histories");
  return response.data;
};

export const checkIn = async () => {};
