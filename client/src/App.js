import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

import Navbar from './components/frequents/NavBar'
import Home from './components/Home'
import Create from './components/Create'
import Category from './components/Category'
import Post from './components/single-post/Post'
import EditPost from './components/single-post/EditPost'
import PageNotFound from './components/frequents/PageNotFound'
import EditComment from './components/single-post/EditComment'

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
            <Route path="/post-edit/:id" component={EditPost}/>
            <Route path="/edit-comment/:id" component={EditComment}/>
            <Route component={PageNotFound}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
