module.exports = {
    
    index(req, res) {
        // __dirname informa o caminho absoluto do diretório que contém o arquivo atualmente em execução.
        const city = req.query.city
        return res.render('index')
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    orphanages(req, res) {
        return res.render('orphanages')

    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    }

}