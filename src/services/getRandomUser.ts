import { User } from "@/types/userTypes";
import api from "@/config/api";

export const getRandomUser = async (): Promise<User> => {
  const response = await api.get(`randomuser.me/api/`);
  return response.data.results[0];
};
