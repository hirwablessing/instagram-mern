const mongoose = require("mongoose");

const Post = mongoose.Schema({
  caption: String,
  user: String,
  image: String,
  comments: [],
});

module.exports = mongoose.model("post", Post);
