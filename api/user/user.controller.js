const {
  getAllUsers,
  createUser,
  getUserByEmail
} = require('./user.service');

const { signToken } = require('../../auth/auth.service');
const { log } = require('../../utils/logger');

async function getAllUsersHandler(req, res) {
  try {
    const users = await getAllUsers();

    return res.status(200).json(users);
  } catch (error) {
    log.error(error);
    return res.status(500).json({ error: error.message });
  }
}

async function createUserHandler(req, res) {
  try {
    const user = await createUser(req.body);

    return res.status(201).json(user.profile);
  } catch (error) {
    log.error(error);
    return res.status(500).json({ error: error.keyValue });
  }
}

async function getUserByEmailHandler(req, res) {
  const { email } = req.params;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .json({ message: `User not found with email: ${email}` });
    }
    const token = signToken(user.profile);
    return res.status(200).json(token);
  } catch (error) {
    log.error(error);
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAllUsersHandler,
  createUserHandler,
  getUserByEmailHandler
};