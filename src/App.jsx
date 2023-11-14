import React, { Component } from 'react';
import SignUpFrom from './components/SignAppForm';
import Content from './components/Content';
import Stars from './components/Stars';
import Toggle from './components/Toggle'

const DarkBody = { background: 'radial-gradient(circle, black 100%, black 100%);'}
const LightBody = { background: 'radial-gradient(circle, rgba(67,50,105,1) 0%, rgba(29,24,39,1) 100%);'}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "night"
        };
        this.themeToggler = this.themeToggler.bind(this)
    }

    themeToggler() {
        this.state.theme === 'light' ? this.setState({ theme: 'night' }): this.setState({ theme: 'light'})
    }

    changeBodyColor() {
        const styleBody = this.state.theme === 'light' ? LightBody: DarkBody;
        document.body.style.background = styleBody.background;
        console.log(document.body.style.background);
    }

    render() {
        return (
            <>
                <Stars theme={this.state.theme}/>
                <Content/>
                <SignUpFrom theme={this.state.theme}/>
                <Toggle 
                    theme={this.state.theme}
                    toggleTheme={this.themeToggler}
                />
            </>
        )
    }
}

