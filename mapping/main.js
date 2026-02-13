import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const map = L.map('map1');
const attrib = "Copyright OpenStreetMap contributors, Open Database License";
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: attrib
}).addTo(map);
map.setView(L.latLng(51.05, -0.72), 14);
