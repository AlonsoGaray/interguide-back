const { getUserByEmail } = require('../../api/user/user.service');
const { signToken } = require('../auth.service');
const bcrypt = require('bcryptjs');

async function loginUserHandler(req, res) {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(400).json({
        message: 'Hubo un error, revisa si el email o la contraseña son correctos',
      });
    }

    if (!user.isVerified) {
      return res.status(400).json({
        message: 'Su email no está validado, revise su bandeja de mensajes o spam',
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        message: 'Hubo un error, revisa si el email o la contraseña son correctos',
      });
    }

    const token = signToken(user.profile);

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  loginUserHandler
};
