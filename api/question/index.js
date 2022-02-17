const { Router } = require('express');

const {
  getAllQuestionsHandler,
  createQuestionHandler,
  getQuestionByIdHandler,
  updateQuestionHandler
} = require('./question.controller');

const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();

router.get('/', getAllQuestionsHandler);
router.get('/:id', isAuthenticated(), getQuestionByIdHandler);
router.post('/', isAuthenticated(), createQuestionHandler);
router.patch('/:id', isAuthenticated(), updateQuestionHandler);

module.exports = router;
