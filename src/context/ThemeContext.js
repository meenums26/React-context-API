import React,{ createContext ,Component} from 'react'
export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
    state={
        isThemeLight:true,
        light:{fc:"#555",ui:"#ddd",bg:"#eee"},
        dark:{fc:"#ddd",ui:"#555",bg:"#000"}
    }
    toggleTheme = ()=>{
        this.setState({
            isThemeLight:!this.state.isThemeLight
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
