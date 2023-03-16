import React from "react";
import { NAV } from "./nav.js";

export class InfoTemplate extends React.Component {
    
   render() {
    return (
        <div className="info">
            <NAV />
            <div className="cover" style={{backgroundImage: this.props.coverUrl}}>
                <h1>{this.props.header}</h1>
                <h1>{this.props.desc}</h1>
            </div>
            <main>
              <p></p>
              <br></br>
              <p></p>
              <br></br>
              <p></p>
            </main>
        </div>
    );
   }
}