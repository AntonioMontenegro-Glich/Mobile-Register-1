    //Exportando o Modelo de ALuno para configurar o CRUD ou regra de negócio no CONTROLADOR
    //try{função a ser feita}catch (err){res.status(voce define).json({message:err.message});} Usado para tratamento de erro *IMPORTANTE
const Aluno = require('../Model/Aluno');
//Função para Recuperar os Alunos
exports.getALLAlunos = async(req,res) => {
try{
    const alunosP = await Aluno.find();
    res.json(alunosP);
} catch (err) {
    res.status(500).json({message:err.message});
}
};
//Função para Criar um novo Aluno no banco de dados quando um cliente de cadastra
exports.createAluno = async(req,res) => {
    const {nome, senha} = req.body;
    const newAluno = newAluno({nome, senha});

    try{
        const savedAluno = await newAluno.save();
           res.status(201).json(savedAluno)
    } catch (err){
        res.status(400).json({message:err.message});
    }
};
//Função para Atualizar ou editar um aluno já existente
exports.updateAluno = async(req,res) => {
    try{
     const updateAluno = await Aluno.findByIdAndUpdate(req,params.id, req.body, {new: true});
    req.json(updateAluno);
    } catch (err){
        res.status(400).json({message:err.message});
    }
};
//Função para deletar um Aluno do sistema
exports.deleteAluno = async(req,res) =>{
    try{
    await Aluno.findByIdAndDelete(req,params.id);
    res.json({message:'Aluno deletado'});
    } catch (err){
        res.status(500).json({mesage:err.message});
    }
};