import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Navbar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          This is the app
        </div>
      </Router>
    );
  }
}

export default App;
