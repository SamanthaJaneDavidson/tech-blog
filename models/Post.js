const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING, //figure out how to get this to pull in from login info 
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    date_posted: {
      type: DataTypes.STRING, //need to figure out how to get this to pull in automatically
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);
