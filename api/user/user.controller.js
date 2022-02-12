const {
  getAllUsers,
  createUser
} = require('./user.service');

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
  const user = req.body
  try {
    // const users = await getAllUsers();
    // const check = users.map(u => u.email).includes(user.email)

    // if (check) {
    //   return res.status(400).json('usuario existe')
    // }

    const data = await createUser(req.body);
    return res.status(201).json(data);
  } catch (error) {
    log.error(error);
    return res.status(500).json({ error: error.keyValue });
  }
}

module.exports = {
  getAllUsersHandler,
  createUserHandler
};
