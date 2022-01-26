const router = require('express').Router();
const userController = require('../controllers/userController');
const roleMiddleware = require('../middlewares/roleMiddleware');
const { ROLES } = require('../utils/constants');

router.get('/', roleMiddleware([ROLES.ADMIN]), userController.getUsers);

module.exports = router;