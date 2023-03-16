const commentService = require("../Services/commentService.js");
const tokenService = require("../Services/tokenService.js");
const { User } = require("../models/User");

exports.createComment = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const { postId, text } = req.body;
    const userData = tokenService.validateRefreshToken(refreshToken);
    const user = await User.findById(userData.id);
    const comment = await commentService.createComment(postId, text, user);
    res.json(comment);
  } catch (e) {
    next(e);
  }
};

exports.getComments = async (req, res, next) => {
  try {
    const id = req.params.id;
    const comments = await commentService.getComments(id);
    res.json(comments);
  } catch (e) {
    next(e);
  }
};
