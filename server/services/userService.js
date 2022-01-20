const User = require('../models/User');

class UserService {

  saveUser(user) {
    const newUser = new User(user);
    return newUser.save();
  }

  getUsers() {
    return User.find();
  }
}

module.exports = new UserService();