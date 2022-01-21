const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/registration', authController.registration);
router.post('/login', authController.login);

module.exports = router;