import axios from "axios";
import { IPost } from "../types/post.interface";

axios.defaults.baseURL = "http://localhost:5000";

export const PostService = {
  async getPosts() {
    const { data } = await axios.get<IPost[]>("/posts");
    return data;
  },

  async getPost(id: string) {
    const { data } = await axios.get<IPost>(`/posts${id}`);
    return data;
  },
};
