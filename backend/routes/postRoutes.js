const express = require("express");
const { createPost } = require("../controllers/postController");

const postRoutes = express.Router();

postRoutes.post("/posts", createPost);

exports.postRoutes = postRoutes;
