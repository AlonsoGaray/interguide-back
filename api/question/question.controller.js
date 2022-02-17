const {
  getAllQuestions,
  createQuestion,
  getQuestionById,
  updateQuestion
} = require('./question.service');
const { emitQuestion, emitUpdateQuestion } = require('./question.event');

async function getAllQuestionsHandler(req, res) {
  try {
    const questions = await getAllQuestions();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getQuestionByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const question = await getQuestionById(id);

    if (!question) {
      return res.status(404).json({ message: `Question not found with id: ${id}` });
    }

    return res.status(200).json(question);
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

async function updateQuestionHandler(req, res) {
  const { id } = req.params;
  try {
    const question = await updateQuestion(id, req.body);

    emitUpdateQuestion(question);

    if (!question) {
      return res.status(404).json({ message: `Question not found with id: ${id}` });
    }

    return res.status(200).json(question);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllQuestionsHandler,
  createQuestionHandler,
  getQuestionByIdHandler,
  updateQuestionHandler
};
