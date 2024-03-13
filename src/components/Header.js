import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
export const Header = () => {   

    const login = () => {
        window.location.href = 'http://localhost:3000/login';
    };
    const register = () => {
      window.location.href = 'http://localhost:3000/register';
  };
  const acasa = () => {
    window.location.href = 'http://localhost:3000/';
};
const profil = () => {
  window.location.href = 'http://localhost:3000/user-profile';
};
    return (
        <header className="header">
      <div className="header-content">
        <h1>Spinu Webstore</h1>
        <div className="buttons">
        <button className="button" onClick={acasa}>Produse</button>
          <button className="button" onClick={login}>Login</button>
          <button className="button" onClick={register}>Register</button>
          <button className="button" onClick={profil}>Account</button>
        </div>
      </div>
    </header>
    );
}