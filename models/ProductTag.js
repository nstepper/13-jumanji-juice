const { Model, DataTypes } = require('sequelize');
const Product = require('./Product');

const sequelize = require('../config/connection');

class ProductTag extends Model {
  static async bulkCreateProductTags(productTagData) {
    try {
      await ProductTag.bulkCreate(productTagData);
      console.log('Product tags created successfully!');
    } catch (error) {
      console.error('Error creating product tags:', error);
    }
  }
}

ProductTag.init(
  {
    // define columns
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
ProductTag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id',
  otherKey: 'product_id',
});



module.exports = ProductTag;
