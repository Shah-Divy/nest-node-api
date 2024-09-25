const AuthController = require('./auth/auth.controller'); // Adjust the path as necessary
const AuthService = require('./auth/auth.service'); // Ensure this path is correct
const productService = require('./product/product.service');
const productController = require('./product/product.controller');

class AppModule {
  constructor() {
    this.authService = new AuthService();
    this.authController = new AuthController(this.authService);
    this.productService = new productService();
    this.productController = new productController(this.productService);
  }

  getRoutes() {
    const router = require('express').Router();
    router.use(this.authController.router); // Use the router defined in AuthController
    router.use(this.productController.router); // Use the router defined in ProductController
    return router;
  }
}

module.exports = AppModule;
