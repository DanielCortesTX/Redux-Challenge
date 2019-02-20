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
import PageNotFound from './components/PageNotFound'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/create" component={Create}/>
            <Route path="/category/:category" component={Category}/>
            <Route path="/post/:id" component={Post}/>
            <Route component={PageNotFound}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
