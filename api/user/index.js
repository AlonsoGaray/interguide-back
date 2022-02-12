const { Router } = require('express');

const {
  getAllUsersHandler,
  createUserHandler
} = require('./user.controller');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);

module.exports = router;
