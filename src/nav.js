import React from "react";
import { Link } from "react-router-dom";

export function NAV() {
    return (
        <nav>
        <Link to="/bear" style={{textDecoration: 'none'}}><p>Home</p></Link>
        <p>About</p>
        <ion-icon name="moon-outline" className='Toggle'></ion-icon>
        <a href="https://github.com/Lensco825/animal-info-website"><ion-icon name="logo-github"></ion-icon></a>
      </nav>
    )
}
