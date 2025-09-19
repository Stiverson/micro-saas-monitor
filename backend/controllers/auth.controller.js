const path = require('path');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error('JWT_SECRET not defined in environment variables');
}
// ... o resto do seu código

const register = async (req, res) => {
  const { email, password } = req.body;

  // Validação básica
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // 1. Verificar se o usuário já existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists.' });
    }

    // 2. Fazer o hash da senha
    const salt = await bcrypt.genSalt(10); // Gera um "sal" para o hash
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Salvar o novo usuário no banco de dados
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // 4. Gerar um token JWT para o novo usuário
    const token = jwt.sign({ userId: newUser.id }, jwtSecret, {
      expiresIn: '1h', // O token expira em 1 hora
    });

    // 5. Retornar o token e os dados do usuário (sem a senha)
    const userWithoutPassword = { id: newUser.id, email: newUser.email };
    res.status(201).json({ token, user: userWithoutPassword });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  register,
  // login (será adicionado aqui depois)
};