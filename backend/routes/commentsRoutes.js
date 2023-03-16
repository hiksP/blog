const express = require("express");
const {
  createComment,
  getComments,
} = require("../controllers/commentsController");
const auth = require("../middlewares/auth");

const commentsRoutes = express.Router();

commentsRoutes.post("/comments", auth, createComment);
commentsRoutes.get("/posts/:id/comments", getComments);

exports.commentsRoutes = commentsRoutes;
