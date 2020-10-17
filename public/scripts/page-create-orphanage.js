const map = L.map('mapid').setView([-11.3030237,-41.858604], 15)

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)


const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
}) 

// L.
// marker([-11.3030237,-41.858604], {icon})
// .addTo(map)

// o let perimite alterar depois. Inicia a varivel vazia 
let marker; 

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // não esquecer de colocar o input no html
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer (usando as variaveis)
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// adicionar o campo de fotos
function addPhotoField () {
    // pegar o cotainer de fotos #image
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem adicionada.
    // fieldsContainer.length - 1 para pegar o ultimo
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // verificar se o campo esta vazio, se sim, nao adicionar ao container de imagem
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    
    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

// criando a funcao de excluir ao acessar o botao de x
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();
}

// selecionar no botao sim ou não
function toggleSelect(event) {
    //retirar a classe .active dos dois botoes
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    //colocar a classe .active nesse botao clicado
    const button = event.currentTarget 
    button.classList.add('active')
    
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value  
}