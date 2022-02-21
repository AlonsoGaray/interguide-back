const mongoose = require('mongoose');

const TagSchemaa = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      minLength: 1
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Tag', TagSchemaa);
