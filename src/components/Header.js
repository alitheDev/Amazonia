import React, { Component } from 'react';
import './Header.css'; // Import the CSS file for styling

class Header extends Component {
  render() {
    return (
      <header className="header">
        {/* Amazon logo */}
        <img
          className="header__logo"
          src="https://www.amazon.com/favicon.ico"
          alt="Amazon Logo"
        />
        {/* Search bar */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <i className="header__searchIcon fas fa-search"></i>
        </div>
        {/* Navigation links */}
        <nav className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          {/* Add more navigation links here */}
        </nav>
        {/* Add more header elements here */}
      </header>
    );
  }
}

export default Header;
    