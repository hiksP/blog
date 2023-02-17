const mongoose = require("mongoose");

const PostScheme = new mongoose.Schema({
  title: { type: String, required: true },
  brief: { type: String },
  content: { type: String, required: true },
  picture: { type: String },
  date: { type: Date, required: true, default: Date.now },
});

exports.Post = mongoose.model("Post", PostScheme);
