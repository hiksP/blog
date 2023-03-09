const express = require("express");
const {
  createPost,
  getAll,
  getPost,
  deletePost,
} = require("../controllers/postController");
const auth = require("../middlewares/auth");

const postRoutes = express.Router();

postRoutes.post("/posts", createPost);
postRoutes.get("/posts", getAll);
postRoutes.get("/posts/:id", getPost);
postRoutes.delete("/posts/:id", auth, deletePost);

exports.postRoutes = postRoutes;
