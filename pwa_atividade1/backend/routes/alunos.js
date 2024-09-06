const express = require('express');
const router = express.Router();
const Aluno = require('../Model/Aluno');

//Criar um novo Aluno

router.post('/',async (req,res) => {
    const {nome,senha} = req.body
    const newAluno = new Aluno({nome,senha});
    await newAluno.save();
    res.json(newAluno);
});

//Listar os nomes dos alunos Cadastrados

router.get('/',async (req,res) => {
    const alunos = await Aluno.find();
    res.json(alunos);
});



// Atualizar nome do Aluno
router.put('/:id',async (req,res) => {
    const {nome,senha} = req.body
    const alunosUpdate = await Aluno.finByIdAndUpdate(req,params.id, {nome,senha}, {new: true});
    res.json(updatedAluno);
});

// Deletar aluno do Sistema
router.delete('/:id', async (req,res) => {
    await Aluno.findByIdAndDelete(req,params.id);
    res.json({ message:"Aluno foi deletado do sistema com sucesso!"});
});

module.exports = router;

