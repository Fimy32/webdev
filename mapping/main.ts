import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const map = L.map('map1');

const attrib = "Copyright OpenStreetMap contributors, Open Database License"

L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

      {
      attribution: attrib
      }
).addTo(map);

map.setView(L.latLng(51.05, -0.72), 14)
const pos = L.latLng(51.05, -0.72);
L.marker(pos).addTo(map);
L.marker(L.latLng(51.000155, -1.478260)).addTo(map);
const startingLocation = L.marker(pos).addTo(map);
startingLocation.bindPopup("You Started here!");

map.on("click", e => {
    //alert(`Location:\nLattitude: ${e.latlng.lat} \nLongitude: ${e.latlng.lng}`);
    const text = prompt('Please enter some text');
    if(text !== null) {
        const marker1 = L.marker(e.latlng).addTo(map);
        marker1.bindPopup(text);
    }
});
    