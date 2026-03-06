import { useState } from 'react';

import SongList from "./songList"


interface Song {
    id: number,
    title: string,
    year: number,
    downloads: number
}

interface SearchBoxComponentProps {
    title: string;
    titleChange: (name: string) => void;
    setSongList: (songs: Song[]) => void
}

export default function artistSearchBox({title, titleChange, setSongList} : SearchBoxComponentProps) {
    return <div>
            <p>Artist: </p>
            <input type="text" placeholder="John Smith" id="artistNameButton" onChange={(event) => titleChange(event.target.value)}></input>
            <button id="artistSearch" onClick={artistSearch}>Search!</button>
        </div>
    
        async function artistSearch() {
        try {
            const response = await fetch(`/artist/${title}`);
            const songs  = await response.json();
            setSongList(songs);         
        } catch(e) { 
            alert(e);
        }

    }
}

