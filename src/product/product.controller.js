class productController {
    constructor(productService) {
      this.productService = productService;
      this.router = require('express').Router();
      this.initializeRoutes();
    }
  
    initializeRoutes() {
      this.router.post('/product/details', this.details.bind(this)); // details route
      this.router.get('/product/details', this.getAllProducts.bind(this)); // Get all users
      this.router.get('/product/details/:id', this.getProductById.bind(this)); // Get user by ID
    }
  
    async details(req, res) {
      try {
        const productData = req.body;
        const newproduct = await this.productService.details(productData);
        return res.status(201).json(newproduct);
      } catch (error) {
        return res.status(500).json({ message: 'Error occurred during details', error: error.message });
      }
    }
  
    async getAllProducts(req, res) {
      try {
        const product = await this.productService.getAllProducts();
        return res.status(200).json(product); // Respond with all users
      } catch (error) {
        return res.status(500).json({ message: 'Error occurred while fetching users', error: error.message });
      }
    }
  
    async getProductById(req, res) {
      try {
        const productId = req.params.id; // Get user ID from request params
        const product = await this.productService.getProductById(productId);
        if (!product) {
          return res.status(404).json({ message: 'User not found' }); // Handle case where user does not exist
        }
        return res.status(200).json(product); // Respond with user data
      } catch (error) {
        return res.status(500).json({ message: 'Error occurred while fetching user', error: error.message });
      }
    }
  }
  
  module.exports = productController;