//Song Interface
interface Song {
    title: string;
    artist: string;
    year: string;
    price: string;
    quantity: number;
    downloads: number;
}


//Artist Search Button
document.getElementById("artistSearch")!.addEventListener('click', async()=> {
      const artistSearchValue = (document.getElementById("artistButton") as HTMLInputElement).value;
      try {
            const response = await fetch(`/artist/${artistSearchValue}`);
            // Await the extraction of the text from the response
            const artistText = await response.json();

            // Loop through the array of JSON objects and add the results to a <div>
            let textBody = "";
            let songs = []
            artistText.forEach ((song: Song) => {
                  songs.push(`Name: ${song.title}<br />Release: ${song.year}<br />Price: ${song.price}<br />Stock: ${song.quantity}<br />`);
                  textBody += songs[songs.length - 1] + `-------------------------<br />`
            });
            document.getElementById("artistText")!.innerHTML = textBody;
      } catch(e) { 
            // Handle promise rejections
            alert(e);
      }
});

//Add a song button
document.getElementById("addSongButton")!.addEventListener('click', async()=> {
      let newSong: Song = {
            title: (document.getElementById("songTitle") as HTMLInputElement).value,
            artist: (document.getElementById("songArtist") as HTMLInputElement).value,
            year: (document.getElementById("songYear") as HTMLInputElement).value,
            price: (document.getElementById("songPrice") as HTMLInputElement).value,
            quantity: 1000,
            downloads: 0
      }
      
      try {
            const response = await fetch(`/addsong/{newSong}`, {
      method: 'POST',
      headers: {
            'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newSong)
            catch(e) { 
            // Handle promise rejections
            alert(e);
      }
});