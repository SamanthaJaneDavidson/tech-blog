const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
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
    comment_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "comment",
        key: "id"
      }

    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);
