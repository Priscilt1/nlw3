//banco de dados

//chamar o sqlite
const Database = require('sqlite-async');


function execute (db) {
    // instrucao sql pedindo para criar uma tabela no banco de dados (caso nao exista)
   return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}


// pedindo para colocar o arquivo sqlite. then sidnigica "entao"
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)//db



