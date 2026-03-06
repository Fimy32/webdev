import { useState } from 'react';
import SongList from "./songList"

interface Song {
    id: number,
    title: string,
    year: number,
    downloads: number
}

interface ArtistSearchBoxComponentProps {
    songlist: Song[];
}

export default function artistSearchResults({songlist} : ArtistSearchBoxComponentProps) {
    const artistListHTML = songlist.map ( song => <li key={song.id}>{song.title}</li>);
    return  (
        <div>
            <p id="ArtistList">
            {artistListHTML}
            </p>
        </div>
    );
 }