import React, { Component } from 'react';
import SignUpFrom from './components/SignAppForm';
import Content from './components/Content';
import Stars from './components/Stars';
import Toggle from './components/Toggle'

// const App = () => {
//     const [theme, setTheme] = useState('light');
//     const themeToggler = () => {
//         console.log(theme);
//         theme === 'light' ? setTheme('dark') : setTheme('light')
//     }
//     return (
//         <>
//             <Stars theme={theme}/>
//             <Content/>
//             <SignUpFrom/>
//             <Toggle 
//                 theme={theme}
//                 toggleTheme={() => themeToggler()}
//             />
//         </>
//     )
// }

// export default App;

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

