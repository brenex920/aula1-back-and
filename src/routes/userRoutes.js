
//inportar o express
const express = require('express')

//passo - criar um router
const router = express.Router();
const userControler = require('../controller/userController');

//3 passo criar as rotas de usuarios 
router.get('/list',userControler.getAllUsers);

//criando a rota que ira obter o dados do usuario por id
//localhost:8000/api/user/
router.get('/:id', userControler.getUserById);

//criando uma rota que ira criar um novo usuario
//localhost:8000/api/user/
router.post('/', userControler.createUser);

//criando uma rota que ira deletar o usuario
router.delete('/:id', userControler.deleteUser);

//criando uma rota para atualizar os usuarios
//localhost:8000/api/user/
router.put('/', userControler.updateUser);

module.exports = router;