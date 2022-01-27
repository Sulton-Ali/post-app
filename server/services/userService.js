const User = require("../models/User");

class UserService {
  createUser(user) {
    const newUser = new User(user);
    return newUser.save();
  }

  getUsers() {
    return User.find();
  }

  getUserById(id) {
    return User.findById(id);
  }
}

module.exports = new UserService();
