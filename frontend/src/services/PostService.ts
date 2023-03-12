import $api from "../http";
import axios from "axios";
import { IPost } from "../types/post.interface";
import { CreatedPost } from "../components/pages/ui/Postmaker/Postmaker";

export const PostService = {
  async getPosts() {
    const { data } = await $api.get<IPost[]>("/posts");
    return data;
  },

  async getPost(id: string) {
    const { data } = await $api.get<IPost>(`posts/${id}`);
    return data;
  },

  async createPost(data: CreatedPost) {
    try {
      const response = await $api.post(`posts`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          type: "formData",
        },
      });

      return response;
    } catch (e) {
      return e;
    }
  },
};
