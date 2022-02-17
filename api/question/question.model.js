const mongoose = require('mongoose');

const QuestionSchemaa = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    firstName: {
      type: String,
      ref: 'User',
      required: true,
    },
    lastName: {
      type: String,
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
    vote: {
      type: Number,
      default: '0',
    },
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
