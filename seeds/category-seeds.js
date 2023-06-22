const  Category = require('../models/Category');
console.log(Category);
const categoryData = [
  {
    name: 'Shirts',
  },
  {
    name: 'Shorts',
  },
  {
    name: 'Music',
  },
  {
    name: 'Hats',
  },
  {
    name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
