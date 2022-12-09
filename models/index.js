// import models
const Blog = require('./Blog');
const Comment = require('./Comment');


Comment.belongsTo(Blog, {
  foreignKey: 'comment_id'
})

module.exports = {
  Blog,
  Comment,
};
