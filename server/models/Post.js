const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: String,
  description: String,
  content: String,
  authorId: String,
  authorName: String,
  createdAt: String,
});

module.exports = model("Post", postSchema);
