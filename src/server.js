// importar biblioteca
const express = require('express');
// o path faz parte do node, que é um modulo que contem varias funcoes e ajuda a tornar a manupulacaod o caminho mais facil
const path = require('path');
const pages = require('./pages.js');


// iniciando o express
const server = express ()
// criando todas as rotas referentes ao public (arquivos estaticos)
server
    //ultizando body do req
    .use(express.urlencoded({ extended: true }))
    //ultilizando arquivos estaticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    
    // criando rotas 
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)


// ligar o servidor 
server.listen(5500)

// post - envia informacao para o back e o get manda informacao