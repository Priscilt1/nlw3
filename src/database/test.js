const Database = require ('./db')

Database.then(async db => {
    // inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat, 
            lng, 
            name,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-11.3030237",
            "-41.848604",
            "lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            "https://images.unsplash.com/photo-1594269146507-03861ba52e8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha quando se sentir a vontade e traga muito amor e paciência para dar",
            "Horários de visitas Das 18h até 8h",
            "1"
        );
    `)

    //consultar dados na tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
})