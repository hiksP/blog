const { Post } = require("../models/Post");
const fileService = require("./fileService");

class PostService {
  async createPost(post, picture) {
    const fileName = fileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getPost(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    const post = await Post.findById(id);
    return post;
  }

  async deletePost(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

const postService = new PostService();

module.exports = postService;
