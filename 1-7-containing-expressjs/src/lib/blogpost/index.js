const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPostModel;
