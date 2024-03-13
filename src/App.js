import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { Home } from './components/Home.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { ProductForm } from './components/ProductForm.js';
import { UserProfile } from './components/UserProfile.js';

function App() {
  const [user, setUser] = useState(null); 
  const history = useHistory();

  const handleLogin = (userData) => {
    setUser(userData);
    history.push('/user-profile');
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/secret_page" component={ProductForm} />
          <Route path="/user-profile">
            <UserProfile user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
