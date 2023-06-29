const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {
  static async bulkCreateCategories(categoryData) {
    try {
      await Category.bulkCreate(categoryData);
      console.log('Categories created successfully!');
    } catch (error) {
      console.error('Error creating categories:', error);
    }
  }
}

Category.init(
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
    modelName: 'category',
  }
);

module.exports = Category;
