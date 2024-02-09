import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
export const Header = () => {   

    const handleLoginClick = () => {
        window.location.href = 'http://localhost:3000/login';
    };
    return (
        <header className="header">
      <div className="header-content">
        <div className="burger-menu"></div>
        <h1>Spinu Webstore</h1>
        <div className="buttons">
          <button className="button" onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </header>
    );
}