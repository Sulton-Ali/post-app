const router = require('express').Router();

const postService = require('../services/postService');

router.get('/', async (req, res) => {
  try {
    const posts = await postService.getPosts();
    await res.status(200).json(posts);
  } catch (e) {
    console.log(e)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postService.getPostById(postId);
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json(e);
  }
})

router.get('/author/:id', async (req, res) => {
  const authorId = req.params.id;
  try {
    const posts = await postService.getPostsByAuthorId(authorId)
    res.status(200).json(posts)
  } catch (e) {
    res.status(500).json(e);
  }
})

router.post('/', async (req, res) => {
  try {
    const newPost = await postService.savePost(req.body);
    await res.status(201).json(newPost);
  } catch (e) {
    console.log(e);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const post = req.body;
    const updatedPost = await postService.updatePost(postId, post)
    await res.status(200).json(updatedPost);
  } catch (e) {
    console.log(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postService.deletePostById(postId);
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json(e);
  }
})

module.exports = router;