import { useState } from 'react';

import SongList from "./songList"


export default function artistSearchBox() {
    return
        <div>
            <p>Artist: </p>
            <input type="text" placeholder="John Smith" id="artistNameButton" onChange={(event) => setArtistName(event.target.value)}></input>
            <button id="artistSearch" onClick={artistSearch}>Search!</button>
            <p id="ArtistList">
                {artistListHTML}
            </p>
        </div>

        async function artistSearch() {
            try {
                const response = await fetch(`/artist/${artistName}`);
                const songs  = await response.json();
                /*
                let tempSongList: Song[] = []
                songs.array.forEach((song: Song) => {
                    tempSongList.push(song)});
                */
                setSongList(songs);         
            } catch(e) { 
                alert(e);
            }

        }
}

