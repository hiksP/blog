const { Post } = require("../models/Post");
const PostService = require("../Services/postService.js");

exports.createPost = async (req, res, next) => {
  try {
    const post = await PostService.createPost(req.body, req.files);
    res.json(post);
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const posts = await PostService.getAll();
    return res.json(posts);
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.getPost = async (req, res, next) => {
  try {
    const post = await PostService.getPost(req.params.id);
    return res.json(post);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const post = await PostService.deletePost(req.params.id);
    return res.json(post);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
