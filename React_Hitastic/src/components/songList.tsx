import { useState } from 'react';

import ArtistSearchBox from "./artistSearchBox"
import ArtistSearchResults from "./artistSearchResults"


interface Song {
    id: number,
    title: string,
    year: number,
    downloads: number
}

export default function SongList() {

    const [songList, setSongList] = useState<Song[]>([]);
    const [artistName, setArtistName] = useState("");

   
    return <div>
        <ArtistSearchBox title={artistName} titleChange={setArtistName}, setSongList={setSongList} />
        <ArtistSearchResults name={name} />
        </div>
}


