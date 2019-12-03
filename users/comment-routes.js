const db = require("../data/db.js");

// posts///////

const getCommentsByPostId = (req, res) => {
  db.findPostComments(req.params.post_id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the post"
      });
    });
};
const getByPostId = (req, res) => {
  db.findById(req.params.id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the post"
      });
    });
};

const getPosts = (req, res) => {
  db.find()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the post"
      });
    });
};
const makePosts = (req, res) => {
  db.insert({ title: req.body.title, contents: req.body.contents })
    .then(make => {
      res.status(200).json(make);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error posting"
      });
    });
};

const updatePost = (req, res) => {
  db.update(req.params.id, {
    title: req.body.title,
    contents: req.body.contents
  })
    .then(make => {
      res.status(200).json(make);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error posting"
      });
    });
};

const deletePostById = (req, res) => {
  db.findById(req.params.id)
    .then(async post => {
      await db.remove(req.params.id);

      res.status(200).json(post);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the post"
      });
    });
};
// comments //////

const createComment = (req, res) => {
  db.insertComment({ text: req.body.text, post_id: req.params.post_id })
    .then(comms => {
      res.status(200).json(comms);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error making comment"
      });
    });
};

module.exports = {
  getCommentsByPostId,
  createComment,
  getByPostId,
  getPosts,
  makePosts,
  deletePostById,
  updatePost
};
