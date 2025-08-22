
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Rotas da API
const authRoutes = require('./routes/auth.routes');
app.use('/api/v1/auth', authRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));