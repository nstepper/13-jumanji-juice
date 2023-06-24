const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./Category');

const Product = sequelize.define('Product', {
  // Product model attributes
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Product.belongsTo(Category, {
  foreignKey: {
    name: 'category_id',
    allowNull: true,
  },
});
Category.hasMany(Product, {
  foreignKey: {
    name: 'category_id',
    allowNull: true,
  },
});

module.exports = Product;
