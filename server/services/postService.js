const Post = require('../models/Post');
const User = require('../models/User');

class PostService {

  async savePost(post) {
    const author = await User.findById(post.authorId);
    if (author) {
      const newPost = new Post({
        ...post,
        authorFullName: `${author.name} ${author.surname}`,
        createdAt: Date.now()
      });
      console.log(post)
      author.posts = [...author.posts, newPost._id];
      await author.save();
      return newPost.save();
    } else {
      throw new Error('Author with id ' + post.authorId + ' not found');
    }
  }

  getPosts() {
    return Post.find();
  }

  getPostById(id) {
    return Post.findOne({ _id: id });
  }

  updatePost(id, post) {
    return Post.findOneAndUpdate({_id: id}, {...post});
  }

  deletePostById(id) {
    return Post.findOneAndDelete({ _id: id });
  }

  getPostsByAuthorId(id) {

  }
}

module.exports = new PostService();