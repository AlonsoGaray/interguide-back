const mongoose = require('mongoose');
const config = require('../../config');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    emailVerified: {
      type: Boolean,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      uppercase: true,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    sub: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: 'usuario',
      enum: config.userRoles,
      required: true,
    }
  },
  {
    timestamps: true,
  },
);

// Virtuals
UserSchema.virtual('profile').get(function () {
  const { email, emailVerified, name, nickname, photo, sub, role, identificacion, telefono} = this;
  return { email, emailVerified, name, nickname, photo, sub, role, identificacion, telefono};
});

module.exports = mongoose.model('User', UserSchema);
