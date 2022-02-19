const mongoose = require('mongoose');

const QuestionSchemaa = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    question: {
      type: String,
      unique: true,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    tag: [
      {
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
      },
    ],
    voteCount: {
      type: Number,
      default: '0',
    },
    votes: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
      },
    ],
    answers: [
      {
        type: new mongoose.Schema(
          {
            userId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'User',
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
          },
          {
            timestamps: true,
          },
        )
      }
    ]
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Question', QuestionSchemaa);
