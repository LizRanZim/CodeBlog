const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// Endpoint api/posts

// Create a post
router.post('/', async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });


//  Display all posts
router.get('/', async (req, res) => {
  try {
      const posts = await Post.findAll({
         order: [['id', 'ASC']],
      });

      res.status(200).json(posts);
  } catch (err) {
      res.status(501).json(err);
  }
});

module.exports = router;