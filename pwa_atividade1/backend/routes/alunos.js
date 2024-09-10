//Exportando o meu gerenciador de rotas ou criador de rotas
const express = require('express');
const router = express.Router();
//Exportando  o modelo do aluno para poder criar a rota
const Aluno = require('../controllers/alunosControllers');

router.get('/', alunosControllers.getALLAlunos);
router.post('/', alunosControllers.createAluno);
router.put('/:id', alunosControllers.updateAluno);
router.delete('/:id', alunosControllers.deleteAluno);

module.exports = router;