const mongoose = require("mongoose");

const alunoSquema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true    
    }
});

module.exports = mongoose.model("Aluno", alunoSquema);