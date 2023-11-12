import React, { Component} from 'react'
import "./Content.css"
import Sun from './Sun'

export default class Content extends Component {
    render() {
        return (
            <div className='content'>
                <img 
                    src={require("../images/kosm.png")} 
                    alt="astronaut"
                    className='astronaut'
                />
                <Sun/>
            </div>
        )
    }
}