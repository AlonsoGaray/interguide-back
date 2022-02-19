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
  const updatedQuestion = await Question.findByIdAndUpdate(
    {"_id": id},
    {$push : {
      "answers": {
        userId: question.userId,
        description: question.description
      }
    }},
    {safe: true, upsert: true, new : true},
  )

  return updatedQuestion;
}

async function updateUpVote(data) {
  const updatedUpVote = await Question.findByIdAndUpdate(
    {
      "_id": data.questionID,
    },
    {
      $inc: { "voteCount": 1 },
      $push: { "votes": {"userId": data.userId} }
    },
    {safe: true, new : true, multi: true },
  )

  return updatedUpVote;
}

async function updateDownVote(data) {
  const updatedUpVote = await Question.findByIdAndUpdate(
    {
      "_id": data.questionID,
    },
    {
      $inc: { "voteCount": -1 },
      $pull: { "votes": {"userId": data.userId} },
    },
    {safe: true, new : true, multi: true },
  )

  return updatedUpVote;
}

module.exports = {
  getAllQuestions,
  createQuestion,
  getQuestionById,
  updateQuestion,
  updateUpVote,
  updateDownVote
};
