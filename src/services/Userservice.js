import axios from "axios";
import { server } from "./config";

const baseURL = `${server}/users`;

export const getUsers = async () => {
  return await axios.get(`${baseURL}/`);
};

export const setEnabled = async (data) => {
  return await axios.put(`${baseURL}/enabled`, data);
};
