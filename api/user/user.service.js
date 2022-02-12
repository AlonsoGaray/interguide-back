const User = require('./user.model');

async function getAllUsers() {
  const users = await User.find();
  return users;
}

async function createUser(user) {
  const newUser = await User.create(user);
  return newUser;
}


module.exports = {
  getAllUsers,
  createUser
};
