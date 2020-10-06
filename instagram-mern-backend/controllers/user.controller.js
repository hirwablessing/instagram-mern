const Post = require("../models/post.model");

exports.postImage = (req, res) => {
  const body = req.body;

  Post.create(body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

exports.findPost = (req, res) =>{
  Post.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
})
}
