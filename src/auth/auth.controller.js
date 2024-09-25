class AuthController {
  constructor(authService) {
    this.authService = authService;
    this.router = require('express').Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post('/auth/signup', this.signup.bind(this)); // Signup route
    this.router.get('/auth/users', this.getAllUsers.bind(this)); // Get all users
    this.router.get('/auth/users/:id', this.getUserById.bind(this)); // Get user by ID
  }

  async signup(req, res) {
    try {
      const userData = req.body;
      const newUser = await this.authService.signup(userData);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: 'Error occurred during signup', error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await this.authService.getAllUsers();
      return res.status(200).json(users); // Respond with all users
    } catch (error) {
      return res.status(500).json({ message: 'Error occurred while fetching users', error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const userId = req.params.id; // Get user ID from request params
      const user = await this.authService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' }); // Handle case where user does not exist
      }
      return res.status(200).json(user); // Respond with user data
    } catch (error) {
      return res.status(500).json({ message: 'Error occurred while fetching user', error: error.message });
    }
  }
}

module.exports = AuthController;
