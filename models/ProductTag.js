const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

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
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
    allowNull: false,
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tag,
      key: 'id',
    },
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

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
  allowNull: false,
});
module.exports = ProductTag;

