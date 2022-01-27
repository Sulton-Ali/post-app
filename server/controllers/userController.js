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

  async getUserById(req, res) {
    const userId = req.params.id;
    try {
      const user = await userService.getUserById(userId);
      res.status(200).json(user);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: e.message});
    }
  }
}

module.exports = new UserController();
