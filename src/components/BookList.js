import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext
  render() { 
    const {isThemeLight,light,dark} = this.context
    const theme = isThemeLight?light:dark
    return ( 
      <div className="book-list" style={{background:theme.bg,color:theme.fc}}>
        <ul>
          <li style={{background:theme.ui}}>the way of kings</li>
          <li style={{background:theme.ui}}>the name of the wind</li>
          <li style={{background:theme.ui}}>the final empire</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;