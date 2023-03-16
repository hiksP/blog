const { Comment } = require("../models/Comment");

class CommentService {
  async createComment(postId, text, author) {
    const createdComment = await Comment.create({
      post: postId,
      text,
      author,
    });
    return createdComment;
  }

  async getComments(postId) {
    const comments = await Comment.find({ post: postId }).populate("author");
    return comments;
  }
}

const commentService = new CommentService();

module.exports = commentService;
