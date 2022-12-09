const sequelize = require('../config/connection');
const Blog = require('../models/Blog');
const blogData = require('./post-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Blog.bulkCreate(blogData, {
    individualHooks: true, //not sure what these mean
    returning: true, //not sure what these mean
  });

  process.exit(0);
};

seedDatabase();
