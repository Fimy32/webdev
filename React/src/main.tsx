import React from 'react';
import ReactDOM from "react-dom/client";
import Greeting from "./components/Greeting"
import InteractiveGreeting from "./components/InteractiveGreeting"

const root = ReactDOM.createRoot(
    document.getElementById("root")!
);

root.render(<Greeting firstname="Tina" lastname="Turner" age={999} colour="orange"></Greeting>)
root.render(<InteractiveGreeting></InteractiveGreeting>)
