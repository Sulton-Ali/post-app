const router = require('express').Router();
const userController = require('../controllers/userController');
const roleMiddleware = require('../middlewares/roleMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const { ROLES } = require('../utils/constants');

router.get('/', roleMiddleware([ROLES.ADMIN]), userController.getUsers);

router.get('/:id', authMiddleware, userController.getUserById);

module.exports = router;