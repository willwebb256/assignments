import React from "react"
import Globe from "./assets/images/globe.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Globe} className="nav--logo" />   
            <span className="nav--text">The World's Best Travel Site</span>
        </nav>
    )
}