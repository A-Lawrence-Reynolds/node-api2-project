const express = require("../node_modules/express");

const {
  getCommentsByPostId,
  createComment,
  getByPostId,
  getPosts,
  makePosts,
  deletePostById,
  updatePost
} = require("../users/comment-routes.js");
const router = express();

router.use(express.json());

// router.get("/", (req, res) => {
//   res.send(`
//     <h2> API up and running. </h2>
//     `);
// });
// GET request's //////
router.get("/post/:post_id/comments", getCommentsByPostId);
router.get("/post/:id", getByPostId);
router.get("/posts", getPosts);

// POST request's
router.post("/post/:post_id/comments", createComment);
router.post("/posts", makePosts);
router.put("/posts/:id", updatePost);

// DELETE request
router.delete("/post/:id", deletePostById);
module.exports = router;
