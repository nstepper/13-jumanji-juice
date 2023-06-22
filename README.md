# JumanjiJuice

This is the back end for an e-commerce website built using Express.js, Sequelize, and MySQL. It provides the necessary API routes for managing categories, products, and tags, allowing for the creation, retrieval, updating, and deletion of data in the database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository using the command:

- git clone https://github.com/nstepper/12-tweety.git
 
2. Navigate to the project directory and install the dependencies using the command:

- npm install

4. Set up your MySQL database by running the provided `schema.sql` file.

5. Create a `.env` file and provide your MySQL database credentials:

DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name


6. Seed the database with sample data: `npm run seed`

7. Start the server: `npm start`

## Usage

Once the server is running, you can use a tool like Insomnia Core or any API testing tool to interact with the API routes. The available routes include:

- Category routes: `/api/categories`
- Product routes: `/api/products`
- Tag routes: `/api/tags`

Make requests to these routes using appropriate HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on the database.

## API Routes
The API provides the following routes:

- Category Routes:
  - GET `/api/categories` - Get all categories
  - GET `/api/categories/:id` - Get a single category by ID
  - POST `/api/categories` - Create a new category
  - PUT `/api/categories/:id` - Update a category by ID
  - DELETE `/api/categories/:id` - Delete a category by ID

- Product Routes:
  - GET `/api/products` - Get all products
  - GET `/api/products/:id` - Get a single product by ID
  - POST `/api/products` - Create a new product
  - PUT `/api/products/:id` - Update a product by ID
  - DELETE `/api/products/:id` - Delete a product by ID

- Tag Routes:
  - GET `/api/tags` - Get all tags
  - GET `/api/tags/:id` - Get a single tag by ID
  - POST `/api/tags` - Create a new tag
  - PUT `/api/tags/:id` - Update a tag by ID
  - DELETE `/api/tags/:id` - Delete a tag by ID

## Walkthrough Video

For a detailed demonstration of the application's functionality and how to use the API routes, please refer to this video.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


