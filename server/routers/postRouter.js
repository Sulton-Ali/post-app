const router = require("express").Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", postController.getPosts);

router.get("/:id", postController.getPostById);

router.get("/author/:id", postController.getPostByAuthorId);

router.post("/", authMiddleware, postController.createPost);

router.put("/:id", authMiddleware, postController.updatePost);

router.delete("/:id", authMiddleware, postController.deletePost);

module.exports = router;
