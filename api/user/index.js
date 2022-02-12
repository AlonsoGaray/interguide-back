const { Router } = require('express');

const {
  getAllUsersHandler,
  createUserHandler,
  getUserByEmailHandler,
  updateUserHandler
} = require('./user.controller');

const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/email/:email', isAuthenticated(), getUserByEmailHandler);
router.patch('/:id', updateUserHandler);

module.exports = router;
