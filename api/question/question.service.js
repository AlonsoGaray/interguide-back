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

async function updateQuestion(id, question) {
  const updatedQuestion = await Question.findByIdAndUpdate({"_id": id}, {
    $push : {
      "answers": {userId: question.userId, description: question.description}
    }},
    {safe: true, upsert: true, new : true},)

  return updatedQuestion;
}

module.exports = {
  getAllQuestions,
  createQuestion,
  getQuestionById,
  updateQuestion
};
