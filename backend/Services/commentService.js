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
    let commentArr = [];
    comments.forEach((item) => {
      commentArr.push({
        authorName: item.author.name,
        authorAvatar: item.author.avatar,
        text: item.text,
        date: item.created_at,
        id: item._id,
      });
    });
    return commentArr;
  }
}

const commentService = new CommentService();

module.exports = commentService;
