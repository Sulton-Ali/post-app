const router = require('express').Router();

const userService = require('../services/userService');

router.get('/', async (req, res) => {
  try {
    const users = await userService.getUsers();
    await res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    await res.status(200).json(newUser);
  } catch (e) {
    console.log(e);
    res.send(e)
  }
})

module.exports = router;