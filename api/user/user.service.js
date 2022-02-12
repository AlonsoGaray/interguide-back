const User = require('./user.model');

async function createUser(user) {
  const newUser = await User.create(user);
  return newUser;
}

async function getUserByEmail(email) {
  const user = await User.findOne({ email });
  return user;
}

async function updateUser(id, user) {
  const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
  return updatedUser;
}

async function getAllUsers() {
  const users = await User.find();
  return users;
}


module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
  updateUser
};
