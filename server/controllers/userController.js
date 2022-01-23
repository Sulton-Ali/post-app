const userService = require("../services/userService");

class UserController {
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      res.status(200).json(users);
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  }
}

module.exports = new UserController();
