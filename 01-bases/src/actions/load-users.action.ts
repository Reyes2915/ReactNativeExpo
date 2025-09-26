import axios from "axios";
import type { UserListResponse } from "../interfaces/reqres.response";

export const loadUsersAction = async (page: number) => {
  try {
    const { data } = await axios.get<UserListResponse>(
      `https://reqres.in/api/users`,
      {
        params: {
          page: page,
        },
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      }
    );
    console.log(data);
    return data.data; // Retorna el array de usuarios
  } catch (error) {
    console.error("Error loading users:", error);
    throw error; // Puedes manejarlo según tu caso
  }
};
