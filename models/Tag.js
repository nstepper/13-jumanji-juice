const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tag extends Model {
  static async bulkCreateTags(tagData) {
    try {
      await Tag.bulkCreate(tagData);
      console.log('Tags created successfully!');
    } catch (error) {
      console.error('Error creating tags:', error);
    }
  }
}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

