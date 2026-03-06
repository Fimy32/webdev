import { useState } from 'react';


interface Song {
    id: number,
    title: string,
    year: number,
    downloads: number
}

export default function SongList() {

    const [songList, setSongList] = useState<Song[]>([]);
    const [artistName, setArtistName] = useState("");

    const artistListHTML = songList.map ( song => <li key={song.id}>{song.title}</li>);
   
    return [songList, setSongList], [artistName, setArtistName], artistListHTML
}


