# Fit Lite Final Project Server

This project is the backend server for the Fit Lite application. It provides functionalities such as user authentication, product management, and order management.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone this repository:

   ```sh
   git clone <project-link>
   cd fit-lite-final-project-server
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   ```sh
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the server:

   ```sh
   npm start
   ```

   Or if you are using Yarn:

   ```sh
   yarn start
   ```

   The server will run on the specified PORT (default is 5000).

## API Endpoints

### Authentication
- `POST /api/auth/register`: User registration
- `POST /api/auth/login`: User login

### Products
- `POST /api/products`: Create a new product
- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a product by ID
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

### Orders
- `GET /api/orders/my-orders`: Get user orders (protected)
- `POST /api/orders/create-order`: Create a new order (protected)

## Middlewares
- `authMiddleware.js`: Protect middleware for JWT authentication.
- `errorMiddleware.js`: Error handling middlewares.

## Models
- `userModel.js`: User model
- `productModel.js`: Product model
- `orderModel.js`: Order model