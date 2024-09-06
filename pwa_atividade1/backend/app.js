
const mongoose = require("mongoose");
const express = require("express");
const alunosRoute = require("./routes/alunos");
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.use('/api/alunos', alunosRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server está rodando na porta ${port}`));
