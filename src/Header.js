import React from 'react';
import logo from './Logo.jpg';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    );
  }
}

export default Header;