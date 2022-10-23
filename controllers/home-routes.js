const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const {withAuth} = require('../utils/auth');

// Route to display home page (does not need withAuth)

// Shows home page, but when you click on anything you have to login
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        order: [['id', 'ASC']],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('homepage', {
        posts,
        // Setting the list of posts
        logged_in: req.session.logged_in,
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  
  
  });
  

  module.exports = router;

// Route to display post with comments (needs with withAuth)





// Route to display dashboard (needs with withAuth)





// Route to display login/signup page  (does not need withAuth)





// Route to add a post (needs with withAuth)






// Route to edit a post (needs with withAuth)





// Route to add a comment (needs with withAuth)






module.exports = router;


