import React from "react";
import { Link } from "react-router-dom";


const linkStyle = {
  textDecoration: 'none'
}

export function NAV() {
    return (
        <nav>
        <p><Link to="/home" style={linkStyle}>Home</Link></p>
        <p>About</p>
        <ion-icon name="moon-outline" className='Toggle'></ion-icon>
        <a href="https://github.com/Lensco825/animal-info-website"><ion-icon name="logo-github"></ion-icon></a>
      </nav>
    )
}
