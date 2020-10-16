// importar biblioteca
const express = require('express')
// o path faz parte do node, que é um modulo que contem varias funcoes e ajuda a tornar a manupulacaod o caminho mais facil
const path = require ('path')
// iniciando o express
const server = express ()

// criando rota
server.get('/', (request, response) => {
    // __dirname informa o caminho absoluto do diretório que contém o arquivo atualmente em execução.
    console.log(path.join(__dirname, 'views'))
})

// ligar o servidor 
server.listen(5500)