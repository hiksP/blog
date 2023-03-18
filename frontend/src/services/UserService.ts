import $api from "../http";
import { AxiosResponse } from "axios";
import { IUser } from "../types/user.inteface";

export const UserService = {
  async getMe(): Promise<AxiosResponse<IUser>> {
    return $api.get<IUser>("/users/me");
  },

  async updateMe(email?: string, name?: string): Promise<AxiosResponse<IUser>> {
    return $api.patch<IUser>("/users/me", { email, name });
  },

  async updateAvatar(avatar: string): Promise<AxiosResponse<IUser>> {
    return $api.patch<IUser>("/users/me/avatar", { avatar });
  },
};
