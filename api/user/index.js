const { Router } = require('express');

const {
  getAllUsersHandler,
  createUserHandler,
  getUserByEmailHandler,
  updateUserHandler,
  getUserByIdHandler,
  updatePlusPointsHandler,
  updateLessPointsHandler
} = require('./user.controller');

const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/:id', isAuthenticated(), getUserByIdHandler);
router.get('/email/:email', isAuthenticated(), getUserByEmailHandler);
router.patch('/:id', isAuthenticated(), updateUserHandler);
router.patch('/like/plus', isAuthenticated(), updatePlusPointsHandler);
router.patch('/like/less', isAuthenticated(), updateLessPointsHandler);

module.exports = router;
