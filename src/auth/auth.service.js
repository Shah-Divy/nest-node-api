const bcrypt = require('bcrypt');
const UserModel = require('./user.model'); // Adjust the import according to your file structure

class AuthService {
  async signup(userData) {
    const { username, password, email } = userData;

    // Generate a salt
    const saltRounds = 10; // You can adjust this as needed
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user in the database
    const newUser = new UserModel({
      username,
      password: hashedPassword,
      email,
    });

    // Save the user and return the result
    return await newUser.save();
  }

  async getAllUsers() {
    return await UserModel.find(); // Fetch all users
  }

  async getUserById(userId) {
    return await UserModel.findById(userId); // Fetch user by ID
  }
}

module.exports = AuthService;
