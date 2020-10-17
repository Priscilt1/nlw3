// para desabilitar as opces de rolagens, popup, zoom...
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// inserindo o mapa
// lagitude, longitude e zoom
const map = L.map('mapid', options).setView([-11.3030237,-41.858604], 15)

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    // largura e altura do icon
    iconSize: [58, 68],
    // onde ficara o  popup
    iconAnchor: [29,68],
    popupAnchor:[170,2]
})


//crate and add marker
L.
marker([-11.3030237,-41.858604], {icon})
.addTo(map)


// create image gallery
function selectImage (event) {
    // currentTarget = atual alvo
    const button = (event.currentTarget)

    // remover todas as classes activas
    // querySelectorAll = busca por todos os seletores/botao
    const buttons = document.querySelectorAll(".images button")
    // (() => {}) function. Para todos os botoes executa tal funcao
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    // pegado o primeiro nivel da imagem
    const imageContainer = document.querySelector(".orphanage-details > img")


    //atualizar o container de imagem 
    imageContainer.src = image.src


    //adicionar a classe active para o botao que foi clicado
    button.classList.add('active')
}



// casa de acolhamento no lugar de orfanato