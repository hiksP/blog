const express = require("express");
const {
  createPost,
  getAll,
  getPost,
  deletePost,
} = require("../controllers/postController");

const postRoutes = express.Router();

postRoutes.post("/posts", createPost);
postRoutes.get("/posts", getAll);
postRoutes.get("/posts/:id", getPost);
postRoutes.delete("/posts/:id", deletePost);

exports.postRoutes = postRoutes;
