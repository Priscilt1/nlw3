const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-11.3030237",
    lng: "-41.88604",
    name: "Abai",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "09999999",
    images: [
      "https://images.unsplash.com/photo-1594269146507-03861ba52e8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1574647258357-e19ec1bcc09c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(), //toString para transformar a imagem em uma string e conseguir salvar
    instructions:
      "Venha quando se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horários de visitas Das 18h até 8h",
    open_on_weekends: "1",
  });

  
  console.log(selectedOrphanages);

  // consultar somente 1 orphanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanage);

  //deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
});
