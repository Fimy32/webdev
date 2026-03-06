import React from 'react';
import ReactDOM from "react-dom/client";
import SongList from "./components/songList"

const root = ReactDOM.createRoot(
    document.getElementById("root")!
);


root.render(
    <>
        <h1>Welcome to the React Hitastic App!</h1>
        <SongList />
    </>
)