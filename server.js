const express = require('express');
const routes = require('./routes');

// import sequelize connection
 const sequelize = require('./config/connection');

 const Category = require('./models/Category');
 const Product = require('./models/Product');

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

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }) // Set force to true to recreate tables on every server start
  .then(() => {
    console.log('Tables created successfully.');
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
  });
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
}); 
