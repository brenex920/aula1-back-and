

//Simulaçao de um bani de dados em memiria
let users = [
    {id: 1, name: `Aline`, email: `aline@gmail.com`}, 
    {id: 2, name: `carlos`, email:`carlos@gmail.com`},
    {id: 3, name: `gabriel`, email: `gabriel@gmail.com`}
    
]

const findAll = () => {
    return users;
}

//busca pelo ID
const findById = (id) => {
    return users.find(user => user.id === id);

}
//funcao para adicionar novo usuario (comando Isert)
const create = (newUser) => {
    //cherando o ID do proximo item (usuario)
    //length
    const newId = users.length > 0 ? users[users.length -1].id : 1;

    const userWithId = {id: newId, ...newUser};
    
    users.push(userWithId);

    return userWithId;
}
//funçao para deletar um usuario
const deleteUser = (id) => {
    //descobrir o index do elemento para excluir
    const index = users.findIndex(user => user.id === id);
    let sql = 'delete from usuarios where id = ' + id; 
    if(index !== -1){
        const [deleteUser] = users.splice(index,1);
        return deleteUser;
    }else{
        return null;
    }

}


//funçao para atualizar dados de um usuario
const updateUser =  (dataUser) => {

        //descobrir o index do elemento para excluir
        const index = users.findIndex(user => user.id === dataUser.id);

        //alterando os dados
        users[index] = dataUser;
        
        return users[index];


}



module.exports = {
    findAll,
    findById,
    create,
    deleteUser,
    updateUser
}

