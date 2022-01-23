const postService = require("../services/postService");

class PostController {
  async getPosts(req, res) {
    try {
      const posts = await postService.getPosts();
      await res.status(200).json(posts);
    } catch (e) {
      console.log(e);
    }
  }

  async getPostById(req, res) {
    try {
      const postId = req.params.id;
      const post = await postService.getPostById(postId);
      res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getPostByAuthorId(req, res) {
    const userId = req.params.id;
    try {
      const posts = await postService.getPostsByAuthorId(userId);
      res.status(200).json(posts);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  async createPost(req, res) {
    try {
      const userId = req?.user?.id;
      const newPost = await postService.createPost(req.body, userId);
      await res.status(201).json(newPost);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: e.message });
    }
  }

  async updatePost(req, res) {
    try {
      const postId = req.params.id;
      const post = req.body;
      const userId = req.user.id;
      const updatedPost = await postService.updatePost(postId, post, userId);
      await res.status(200).json(updatedPost);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: e.message });
    }
  }

  async deletePost(req, res) {
    try {
      const postId = req.params.id;
      const post = await postService.deletePostById(postId);
      res.status(200).json(post);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }
}

module.exports = new PostController();
