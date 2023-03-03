import $api from "../http";
import axios from "axios";
import { IPost } from "../types/post.interface";

export const PostService = {
  async getPosts() {
    const { data } = await $api.get<IPost[]>("/posts");
    return data;
  },

  async getPost(id: string) {
    const { data } = await $api.get<IPost>(`posts/${id}`);
    return data;
  },
};
