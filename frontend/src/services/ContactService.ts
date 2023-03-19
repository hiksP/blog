import $api from "../http";
import { AxiosResponse } from "axios";

export const ContactService = {
  async Contact(text: string, name: string, email: string) {
    return $api.post<AxiosResponse>(
      "/contact",
      {
        text,
        name,
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};
