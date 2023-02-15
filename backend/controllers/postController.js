const { Post } = require("../models/Post");

exports.createPost = async (req, res, next) => {
  try {
    const { title, brief, content, picture } = req.body;
    const post = await Post.create({ title, brief, content, picture });
    res.json(post);
  } catch (e) {
    res.status(500).json(e);
  }
};
