
const mongoose = require("mongoose");
const express = require("express");
const alunosRoute = require("./routes/alunos");
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://Antonio:database5004@projetopwafullstack.6kfcu.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoPWAFullstack');

app.use('/api/alunos', alunosRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server está rodando na porta ${port}`));
