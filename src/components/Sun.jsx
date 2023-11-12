import React, { Component} from 'react'
import './Sun.css'

export default class Sun extends Component {
    render() {
        return (
            <div className="container">
                <div className="sun"></div>
                <div className="earth">
                    <div className="moon"></div>
                </div>
            </div>
        )
    }
}