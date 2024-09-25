const ProductModel = require('./product.model'); // Adjust the import according to your file structure

class productService {
  async details(productData) {
    const { companyname, modelname, price, shopname } = productData;

    // Create a new user in the database
    const newProduct = new ProductModel({
      companyname,
      price,
      modelname,
      shopname,
    });

    // Save the user and return the result
    return await newProduct.save();
  }

  async getAllProducts() {
    return await ProductModel.find(); // Fetch all users
  }

  async getProductById(productId) {
    return await ProductModel.findById(productId); // Fetch user by ID
  }
}

module.exports = productService;
