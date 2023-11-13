import React, { Component} from 'react'
import './Stars.css'

export default class Stars extends Component {
    render() {
        return (
            <div className="starsContainer">
                <div className="stars"></div>
                <div className="twinkling"></div>
            </div>
        )
    }
}