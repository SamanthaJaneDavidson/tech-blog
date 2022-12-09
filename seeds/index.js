const sequelize = require('../config/connection');
const Post = require('../models/Post');
const postData = require('./post-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Post.bulkCreate(postData, {
    individualHooks: true, //not sure what these mean
    returning: true, //not sure what these mean
  });

  process.exit(0);
};

seedDatabase();
