const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    photo: {
      public_id: String,
      format: String,
      created_at: Date,
      url: String,
      secure_url: String,
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

UserSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (!user.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;

  return await bcrypt.compare(candidatePassword, user.password);
};

// Virtuals
UserSchema.virtual('profile').get(function () {
  const { id, email, firstName, lastName, photo, country, role} = this;
  return { id, email, firstName, lastName, photo, country, role};
});

module.exports = mongoose.model('User', UserSchema);
