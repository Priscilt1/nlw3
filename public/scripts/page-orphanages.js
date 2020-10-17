// ps: colocar um mapa no rodape da fai

// inserindo o mapa
// lagitude, longitude e zoom
const map = L.map('mapid').setView([-11.3030237,-41.858604], 15)

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

// create popup overlay 
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>')


//crate and add marker
L.
marker([-11.3030237,-41.858604], {icon})
.addTo(map)
.bindPopup(popup)



