const User = require('./user.model');

async function createUser(user) {
  const newUser = await User.create(user);
  return newUser;
}

async function getUserByEmail(email) {
  const user = await User.findOne({ email });
  return user;
}

async function getUserById(id) {
  const user = await User.findById(id);
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

async function updatePlusPoints(userId) {
  const updatedUpVote = await User.findByIdAndUpdate(
    {
      "_id": userId,
    },
    {
      $inc: { "points": 5 },
    },
    {safe: true, upsert: true, new : true},
  )

  return updatedUpVote;
}

async function updateLessPoints(userId) {
  const updatedUpVote = await User.findByIdAndUpdate(
    {
      "_id": userId,
    },
    {
      $inc: { "points": -5 },
    },
    {safe: true, upsert: true, new : true},
  )

  return updatedUpVote;
}


module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
  updateUser,
  getUserById,
  updatePlusPoints,
  updateLessPoints
};
