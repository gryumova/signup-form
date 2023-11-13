import React, { Component} from 'react'
import './Stars.css'

export default class Stars extends Component {
    render() {
        const style = this.props.theme === 'light' ? {display: "none"}: {display: "flex"};
        return (
            <div 
                className="starsContainer"
                style={style}
            >
                <div className="stars"></div>
                <div className="twinkling"></div>
            </div>
        )
    }
}