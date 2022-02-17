const { Router } = require('express');

const {
  getAllUsersHandler,
  createUserHandler,
  getUserByEmailHandler,
  updateUserHandler,
  getUserByIdHandler
} = require('./user.controller');

const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/:id', isAuthenticated(), getUserByIdHandler);
router.get('/email/:email', isAuthenticated(), getUserByEmailHandler);
router.patch('/:id', updateUserHandler);

module.exports = router;
