import React, { Component} from 'react'
import "./SignAppForm.css"

export default class SignUpFrom extends Component {
    render() {
        return (
            <div className='regform'>
                <div className='titleForm'>
                    <h3>Fill in all the fields:</h3>
                </div>
                <form className='signUpForm'>
                    <input 
                        type='text' 
                        name='first_name' 
                        id='first_name' 
                        placeholder='First Name' 
                        required/>
                    <input 
                        type='text' 
                        name='last_name' 
                        id='last_name' 
                        placeholder='Last Name' 
                        required/>
                    <input 
                        type='email' 
                        name='email' 
                        id='email' 
                        placeholder='Email Address' 
                        required/>
                    <input 
                        type='submit' 
                        id='submit' 
                        value='Sign Up' 
                        />
                </form>
            </div>
        )
    }
}