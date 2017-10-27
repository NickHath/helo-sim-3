import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Friends from './components/Friends/Friends';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/users' component={ Users } />
          <Route path='/friends' component={ Friends } />
          <Route path='/user/settings' component= { Settings } />          
          <Route path='/user' component={ Profile } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
