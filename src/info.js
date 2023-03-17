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
            <div className="content">
                {this.props.content}
            </div>
        </div>
    );
   }
}


export function Content(props) {

    return (
        <main>
        <p>{props.firstText}</p>
        <br></br>
        <p>{props.secondText}</p>
        <img src={props.firstImage} alt='huh'></img>
        <br></br>
        <p>{props.thirdText}</p>
        <p>{props.fourthText}</p>
        <img src={props.secondImage} alt='huh'></img>
        <p>{props.fifthText}</p>
        <p>{props.sixthText}</p>
        <img src={props.thirdImage} alt='huh'></img>
        </main>
    )
}
