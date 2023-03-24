import React from "react";
import { Link } from "react-router-dom";


const linkStyle = {
  textDecoration: 'none'
  color: 'black'
}

export function NAV() {
    return (
        <nav>
        <p><Link to="/home" style={linkStyle}>Home</Link></p>
        <p><Link to="/about" style={linkStyle}>About</Link></p>
        <a href="https://github.com/Lensco825/animal-info-website"><ion-icon name="logo-github"></ion-icon></a>
      </nav>
    )
}
