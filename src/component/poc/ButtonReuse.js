import React, { Component } from "react"
import "../../index.css"

class ButtonReuse extends Component {

    render() {
        return (
            <div>
                <button style={{ borderRadius: 20, borderWidth: 0,padding: 8,outline:0, background: "#3ACEAC",marginLeft:50}} className="my-button">
                    <img style={{ height: 20, width: 20 }} src={this.props.imgSrc} alt = ''/>
                    {this.props.buttonText}
                </button>
            </div>
        )
    }
}

export default ButtonReuse