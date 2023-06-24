const express = require('express');
const routes = require('./routes');
const Category = require('./models/Category');
const Product = require('./models/Product');

// import sequelize connection
 const sequelize = require('./config/connection');


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Define table associations
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }) // Set force to true to recreate tables on every server start
  .then(() => {
    console.log('Tables created successfully.');
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
  });
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
}); 
