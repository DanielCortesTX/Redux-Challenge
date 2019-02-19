import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

import Navbar from './components/NavBar'
import Home from './components/Home'
import Create from './components/Create'
import Category from './components/Category'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route path="/create" component={Create}/>
            <Route path="/category" component={Category}/>
            <Route path="/post" component={Post}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;