import React, { createContext,Component } from 'react'
export const AuthContext = createContext();
export default class AuthContextProvider extends Component {
    state={
        isToggle:true
    }
    toggleLogin = () =>{
        this.setState({
            isToggle:!this.state.isToggle
        })
    }
    render() {
        return (
            <div>
                <AuthContext.Provider value={{...this.state,toggleLogin:this.toggleLogin}}>
                    {this.props.children}
                </AuthContext.Provider>
            </div>
        )
    }
}
