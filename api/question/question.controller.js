const {
  getAllQuestions,
  createQuestion,
} = require('./question.service');
const { emitQuestion } = require('./question.event');

async function getAllQuestionsHandler(req, res) {
  try {
    const questions = await getAllQuestions();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createQuestionHandler(req, res) {
  try {
    const question = await createQuestion(req.body);

    emitQuestion(question);

    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllQuestionsHandler,
  createQuestionHandler,
};
