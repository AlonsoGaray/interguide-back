const { Router } = require('express');

const {
  getAllQuestionsHandler,
  createQuestionHandler,
} = require('./question.controller');

const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();

router.get('/', getAllQuestionsHandler);
router.post('/', isAuthenticated(), createQuestionHandler);

module.exports = router;
