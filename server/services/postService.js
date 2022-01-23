const Post = require("../models/Post");
const User = require("../models/User");

class PostService {
  async createPost(post, userId) {
    const user = await User.findById(userId);
    if (user) {
      const newPost = new Post({
        ...post,
        authorId: user._id,
        authorName: user.username,
        createdAt: Date.now(),
      });
      return newPost.save();
    } else {
      throw new Error("Author with id " + post.authorId + " not found");
    }
  }

  getPosts() {
    return Post.find();
  }

  getPostById(id) {
    return Post.findOne({ _id: id });
  }

  async updatePost(id, post, userId) {
    const postOld = await Post.findById(id);
    if (postOld.authorId !== userId) {
      throw Error("User is not author of post");
    }
    return Post.findByIdAndUpdate(
      { _id: id },
      {
        ...post,
      }
    );
  }

  deletePostById(id) {
    return Post.findOneAndDelete({ _id: id });
  }

  getPostsByAuthorId(id) {}
}

module.exports = new PostService();
