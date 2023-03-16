import $api from "../http";
import { IComment } from "../types/comment.interface";
import { IUser } from "../types/user.inteface";

export const CommentService = {
  async getComments(id: string) {
    const { data } = await $api.get<IComment[]>(`posts/${id}/comments/`);
    return data;
  },

  async postComment(postId: string, text: string) {
    try {
      const response = await $api.post(`comments`, { postId, text });
      return response;
    } catch (e) {
      return e;
    }
  },
};
