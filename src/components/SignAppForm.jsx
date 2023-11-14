import React, { Component} from 'react'
import "./SignAppForm.css"

const lightColor = "#8664D0"
const darkColor = "#d0b164"

const lightThemeTitle = {'backgroundColor': lightColor,
                        'boxShadow': '0px 0.45em 0px 0px #2f214c'}
                        
const darkThemeTitle = {'backgroundColor': darkColor, 
                        'boxShadow': '0px 0.45em 0px 0px #8a7644'}

const lightSubmit = {'backgroundColor': lightColor}
const darkSubmit = {'backgroundColor': darkColor}


export default class SignUpFrom extends Component {
    render() {
        const styleTitleForm = this.props.theme === 'light' ? lightThemeTitle: darkThemeTitle;
        const styleSubmit = this.props.theme === 'light' ? lightSubmit: darkSubmit;
        const idSubmit = this.props.theme === 'light' ? "lightSubmit": "darkSubmit";
        const classInput = this.props.theme === 'light' ? "lightInput": "darkInput";
        
        return (
            <div className='regform'>
                <div 
                    className='titleForm'
                    style={styleTitleForm}
                >
                    <h3>Fill in all the fields:</h3>
                </div>
                <form className='signUpForm'>
                    <input 
                        type='text' 
                        name='first_name' 
                        id='first_name'
                        className={classInput}
                        placeholder='First Name' 
                        required/>
                    <input 
                        type='text' 
                        name='last_name' 
                        id='last_name'
                        className={classInput}
                        placeholder='Last Name' 
                        required/>
                    <input 
                        type='email' 
                        name='email' 
                        id='email'
                        className={classInput}
                        placeholder='Email Address' 
                        required/>
                    <input 
                        type='submit' 
                        id="submit" 
                        className={idSubmit}
                        value='Sign Up' 
                        style={styleSubmit}
                        />
                </form>
            </div>
        )
    }
}