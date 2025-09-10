const express = require('express');
//cria uma aplicaçao de express 
const app = express();


//para definir que o express analise JSON no corpo das requisiçôes
app.use(express.json());


const userRoutes = require('./src/routes/userRoutes');

const porta = 8000;


//roda de teste API
app.get('/api', (req, res)=>{
    res.send('API de Usuários está funcionando');
});

//Rota para listar funcionarios
app.use('/api/users', userRoutes)

//iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localHost: ${porta}`);
})