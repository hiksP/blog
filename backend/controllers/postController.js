const PostService = require("../Services/postService.js");

exports.createPost = async (req, res, next) => {
  try {
    const post = await PostService.createPost(req.body, req.files);
    res.json(post);
  } catch (e) {
    next(e);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const posts = await PostService.getAll();
    return res.json(posts);
  } catch (e) {
    next(e);
  }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await PostService.getPost(req.params.id);
    return res.json(post);
  } catch (e) {
    next(e);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await PostService.deletePost(req.params.id);
    return res.json(post);
  } catch (e) {
    next(e);
  }
};
