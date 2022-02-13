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


module.exports = {
  getAllQuestions,
  createQuestion,
};
