const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// Endpoint for /api/comments

router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });


//   router.post('/', async (req, res) => {
//     try {
//         if (!req.body.user_id) {
//             const newComment = await Comment.create({
//                 conment_text: req.body.content,
//                 user_id: req.session.user_id,
//                 post_id: req.body.post_id
//             });
//             res.status(200).json(newComment);
//         } else {
//             const newComment = await Comment.create({
//                 comment_text: req.body.content,
//                 user_id: req.body.user_id,
//                 post_id: req.body.post_id
//             });
//             res.status(200).json(newComment); 
//         }
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

module.exports = router;