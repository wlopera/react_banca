import axios from "axios";
import { server } from "./config";

const baseURL = `${server}/clients`;

export const getClients = async () => {
  return await axios.get(`${baseURL}/`);
};
