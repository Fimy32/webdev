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

map.on("click", async e => {
    const artistName = prompt('Please enter an artist name');
    const hometown = prompt('Please enter the artist\'s hometown');
    const hometownAdd = {
        artistname: artistName,
        hometown: hometown,
        lat: e.latlng.lat,
        lon: e.latlng.lng
    }
    const response = await fetch(`http://localhost:3000/addHometown?artistname=${artistName}&hometown=${hometown}&lat=${e.latlng.lat}&lon=${e.latlng.lng}`);
});

document.getElementById("artistHometownButton")!.addEventListener('click', async()=> {
      let artist: string = (document.getElementById("artistHometownInput") as HTMLInputElement).value;
      
      try {
            const response = await fetch(`http://localhost:3000/hometown/${artist}`);
            const data = await response.json();
            map.setView(L.latLng(data.lat, data.lon), 14);
            const marker1 = L.marker(L.latLng(data.lat, data.lon)).addTo(map);
            marker1.bindPopup(`Artist: ${artist}\nHometown: ${data.hometown}`);
            document.getElementById("artistHometownParagrapth")!.innerHTML = `Hometown: ${data.hometown}`;
      } catch(e) { 
            // Handle promise rejections
            alert(e);
      }
});
    