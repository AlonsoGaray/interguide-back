const mongoose = require('mongoose');

const CompanySchemaa = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
      minLength: 2
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Company', CompanySchemaa);
