const Question = require('./question.model');

async function getAllQuestions() {
  const question = await Question.find();
  return question;
}

async function createQuestion(question) {
  const newQuestion = new Question(question);
  const savedQuestion = await newQuestion.save();
  return savedQuestion;
}

async function getQuestionById(id) {
  const question = await Question.findById(id);
  return question;
}

module.exports = {
  getAllQuestions,
  createQuestion,
  getQuestionById
};
