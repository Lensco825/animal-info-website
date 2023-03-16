import React from "react";
import { NAV } from "./nav.js";
class InfoTemplate extends React.Component {
    constructor(props) {
        super(props)
    }

    var header = this.props.header;
    var desc = this.props.desc;
    var url = this.props.url;

   render() {
    return (
        <div className="info">
            <NAV />
            <div className="cover" style={{backgroundImage: url}}>
                <h1>{header}</h1>
                <h1>{desc}</h1>
            </div>
            <main>

            </main>
        </div>
    );
   }
}