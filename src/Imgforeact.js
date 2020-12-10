import React, { Component } from "react";
import imgreact from "./Assets/reactgif.gif"

class Imgforeact extends Component {
    render() {
        return (
            <div className="img_conf">
                <img src={imgreact} alt="react"/>
            </div>
        )
    }
}

export default Imgforeact