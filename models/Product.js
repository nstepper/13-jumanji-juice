const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require('./Category');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

class Product extends Model {
  static async bulkCreateProducts(productData) {
    try {
      await Product.bulkCreate(productData);
      console.log('Products created successfully!');
    } catch (error) {
      console.error('Error creating products:', error);
    }
  }
}

Product.init(
  {
    // Product model attributes
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
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
      allowNull: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductTag,
        key: 'id',
      },
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

Product.belongsToMany(ProductTag, {
  through: 'product_tag',
  foreignKey: 'product_id',
  otherKey: 'tag_id',
  as: 'tags', // Add this line to define the association alias
});

Category.hasMany(Product, {
  foreignKey: {
    name: 'category_id',
    allowNull: true,
  },
});

module.exports = Product;
