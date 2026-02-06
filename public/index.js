"use strict";
//Artist Search Button
document.getElementById("artistSearch").addEventListener('click', async () => {
    const artistSearchValue = document.getElementById("artistButton").value;
    try {
        const response = await fetch(`/artist/${artistSearchValue}`);
        // Await the extraction of the text from the response
        const artistText = await response.json();
        // Loop through the array of JSON objects and add the results to a <div>
        let textBody = "";
        let songs = [];
        artistText.forEach((song) => {
            songs.push(`Name: ${song.title}<br />Release: ${song.year}<br />Price: ${song.price}<br />Stock: ${song.quantity}<br />`);
            textBody += songs[songs.length - 1] + `-------------------------<br />`;
        });
        document.getElementById("artistText").innerHTML = textBody;
    }
    catch (e) {
        // Handle promise rejections
        alert(e);
    }
});
//Add a song button
document.getElementById("addSongButton").addEventListener('click', async () => {
    let newSong = {
        title: document.getElementById("songTitle").value,
        artist: document.getElementById("songArtist").value,
        year: document.getElementById("songYear").value,
        price: document.getElementById("songPrice").value,
        quantity: 1000,
        downloads: 0
    };
    try {
        const response = await fetch(`/addsong/{newSong}`);
    }
    catch (e) {
        // Handle promise rejections
        alert(e);
    }
});
