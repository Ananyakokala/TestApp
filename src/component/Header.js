import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <header style={styl}>
                    Redux Application
                </header>

            </div>
        )
    }
}

const styl = {
    background: "#339",
    width: '100%',
    padding: '1rem 5%',
    color: "white"
}

export default Header