// backend/src/controllers/auth.controller.js
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error('JWT_SECRET not defined in environment variables');
}

const register = async (req, res) => {
  // ... sua função de registro
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // 1. Validação básica
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // 2. Encontrar o usuário pelo email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // 3. Comparar a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // 4. Gerar um token JWT para o usuário
    const token = jwt.sign({ userId: user.id }, jwtSecret, {
      expiresIn: '1h',
    });

    // 5. Retornar o token e os dados do usuário (sem a senha)
    const userWithoutPassword = { id: user.id, email: user.email };
    res.status(200).json({ token, user: userWithoutPassword });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  register,
  login,
};