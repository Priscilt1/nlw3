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
const map = L.map('mapid').setView([-11.3030237,-41.858604], 15)

// create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
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



// casa de acolhamento no lugar de orfanato