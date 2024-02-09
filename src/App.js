import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home.js';

import { Login } from './components/Login.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
