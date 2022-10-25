const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const { withAuth } = require('../utils/auth');

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

// Route to display all posts at endpoint api/posts/all

router.get('/posts/all', async (req, res) => {
  try {
    const postData = await Post.findAll({
      order: [['id', 'ASC']],
      include: [{ model: User }],
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

// Display post by id (needs withAuth) show it with it's comments
router.get('/posts/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  try {
    const postData = await Post.findByPk(
      req.params.id,
      { include: [{ model: User }, { model: Comment }] }
    );

    const onePost = postData.get({ plain: true });
    console.log(onePost)

    res.render('post', { onePost, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




// Route to display dashboard (needs with withAuth)
router.get('/dashboard', async (req, res) => {
  try {

    const postData = await User.findByPk(id,
      {
        attributes: { exclude: ['password'] },
        include: [{
          model: Post,
          include: {
            model: User, attributes:
              ['user_name']
          }
        },
        ]
      });

    const posts = postData.map((post) => post.get({ plain: true }));


    res.render('dashboard', {
      posts,
      // Setting the list of posts
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(400).json(err);
  }
});



// Route to display login/signup page  (does not need withAuth)

router.get('/login', (req, res) => {
  res.render('login');
});



// Route to add a post (needs with withAuth)






// Route to edit a post (needs with withAuth)





// Route to add a comment (needs with withAuth)






module.exports = router;


