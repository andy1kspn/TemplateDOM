import './Login.css';
import React, { useState } from 'react';

export const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
      email: '',
      password: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
          const response = await fetch('http://localhost:8080/api/users/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });

          if (response.ok) {
            window.location.href = 'http://localhost:3000/';
              onLogin();
          } else {
              console.error('Autentificare eșuată');
          }
      } catch (error) {
          console.error('Eroare la autentificare:', error);
      }
  };

  return (
      <div className="App">
          <header className="App-header">
              <h1>Pagina de autoidentificare!</h1>
              <div className="form-container">
                  <form onSubmit={handleSubmit}>
                      <label>
                          <input
                              type="text"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter email"
                          />
                      </label>
                      <br />
                      <label>
                          <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="Enter password"
                          />
                      </label>
                      <br />
                      <button type="submit">Send Data</button>
                  </form>
              </div>
          </header>
      </div>
  );
};
