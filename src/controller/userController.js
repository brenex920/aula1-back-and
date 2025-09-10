const userModel = require( '../model/userModel')

//fuçao do controller que lista os usuarios
const getAllUsers = (req, res) => {
    //chamando a função findAçç do model
    const users = userModel.findAll();

    //Devolver uma resposta para o cliete
    res.status(200).json(users);

}

//funçao do controler que obtem um usuario por ID
const getUserById = (req, res) =>{

    //pegando o ID que foi enviado na requisiçao
    const id = parseInt(req.params.id);

    //chamar metodo findById do usermodel
    const user = userModel.findById(id);

    if(user){
        //responder com stats code 200(sucesso)
        //e devolver dados do usuario de forma json
        res.status(200).json(user);
    }else{
        res.status(404).json({mensagem: 'Usuario nao encontrado!'})
    }
}

//criar uma funçao que cria um novo usuario
const createUser = (req, res) => {

    //pegando os dados emviados pelo body da requisiçao
    const {name, email} = req.body;


    //validar
    if (!name || !email){
        return res.status(400).json({mensagem: 'nome ou emil nao obrigatorios'})
    }else{
        const newUser = userModel.create({name, email})
        res.status(201).json(newUser);
    }
}

///funçao que deleta um usuario do sistema
const deleteUser = (req, res) => {
    
const id = parseInt(req.params.id);


//excluir o usuario e retornar
const deletedUser = userModel.deleteUser(id);

if (deletedUser){
    res.status(200).json(deletedUser);
}else{
    res.status(400).json({mensagem: 'informe o id do usuario para excluir corretamente'});
}

}

//metodo do controlador para editar um usuario
const updateUser = (req, res) => {

//primeiro passo pegar os dados enviados pelo body da requisição
const {id, name, email} = req.body;

    //validar se foi enviado o id
    if(!id){
        return res.status(400).json({mensagem: 'o id do usuario e obrigatorio'});
    }else{
        const dataUser = userModel.updateUser({id,name,email});
        res.status(200).json(dataUser);
    }

}






module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
} 
