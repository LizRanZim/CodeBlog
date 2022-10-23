const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


Post.belongsTo(User, {
  foreignKey: 'user_id',
  constraints: false,
});


Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
  constraints: false,
});


Comment.belongsTo(User, {
    foreignKey: 'user_id',
    constraints: false, 
});

module.exports = { User, Post, Comment };