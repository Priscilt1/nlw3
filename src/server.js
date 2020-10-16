// importar biblioteca
const express = require('express')
// o path faz parte do node, que é um modulo que contem varias funcoes e ajuda a tornar a manupulacaod o caminho mais facil
const path = require ('path')
// iniciando o express
const server = express ()

// criando todas as rotas referentes ao public (arquivos estaticos)
server
.use(express.static('public'))
    // criando rota

    //configurar template engine
    .set('views', path.join (__dirname, "view"))
    .set('view engine', 'hbs')

    .get('/', (request, response) => {
        // __dirname informa o caminho absoluto do diretório que contém o arquivo atualmente em execução.
        return response.render('index')
    })


// ligar o servidor 
server.listen(5500)

// post - envia informacao para o back e o get manda informacao