const { Router } = require('express');

const {
  getAllQuestionsHandler,
  createQuestionHandler,
  getQuestionByIdHandler,
  updateQuestionHandler,
  updateUpVoteHandler,
  updateDownVoteHandler
} = require('./question.controller');

const { isAuthenticated } = require('../../auth/auth.service');
const router = Router();

router.get('/', getAllQuestionsHandler);
router.get('/:id', isAuthenticated(), getQuestionByIdHandler);
router.post('/', isAuthenticated(), createQuestionHandler);
router.patch('/:id', isAuthenticated(), updateQuestionHandler);
router.patch('/rate/upvote', isAuthenticated(), updateUpVoteHandler);
router.patch('/rate/downvote', isAuthenticated(), updateDownVoteHandler);

module.exports = router;
