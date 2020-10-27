import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
class Navbar extends Component {
  static contextType = ThemeContext
  render() { 
   <AuthContext.Consumer>{(authContext)=>{
   <ThemeContext.Consumer>{(themeContext)=>{
   const {isToggle} = authContext   
   const {isThemeLight,light,dark} = themeContext
   const theme = isThemeLight?light:dark
    return ( 
      <nav style={{color:theme.fc,background:theme.bg}}>
        <div>{{isToggle}}?Logged In:Logged out</div>
        <h1>Context App</h1>
        <ul>
          <li style={{background:theme.ui}}>Home</li>
          <li style={{background:theme.ui}}>About</li>
          <li style={{background:theme.ui}}>Contact</li>
        </ul>
      </nav>
    );
  }}
    </ThemeContext.Consumer> 
   }}
    </AuthContext.Consumer>
  }
}
 
export default Navbar;