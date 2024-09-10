const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require ('dotenv').config();
const alunosRoute = require("./routes/alunos");

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json({limit: '50mb'})); // Aumentado o Limite de tamanho
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));//Para dados enviados via URL encoded
app.use(express.static('public'));

//Conexão com o MongoDb
mongoose.connect(process.env.MONGODB_URI);
    .then( () => console.log('MongoDb Connected'))
    .catch (err => console.log(err));

//Rotas
const alunosRoute = require('./routes/alunos');
app.use('/api/alunos', alunosRoute);

//Porta
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server está rodando na porta ${port}`));
