const { Comment } = require('../models');

const commentData = [
  {
    comment: 'This is interesting.',
    post_id: 1,
    user_id: 1,
  },
  {
    comment: 'I agree.',
    post_id: 2,
    user_id: 2,
  },
  {
    comment: 'I disagree.',
    post_id: 3,
    user_id: 3,
  },
  {
    comment: 'This makes sense.',
    post_id: 4,
    user_id: 4,
  },
  {
    comment: 'This does not make sense.',
    post_id: 5,
    user_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
