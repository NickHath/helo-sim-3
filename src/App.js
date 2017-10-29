import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Users from './components/Users/Users';
import Friends from './components/Friends/Friends';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

import NavBar from './components/NavBar/NavBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/users/:page' component={ Users } />
          <Route path='/friends' component={ Friends } />
          <Route path='/user/settings' component= { Settings } />          
          <Route path='/user' component={ Profile } />

          {/* Testing route */}
          <Route path ='/workshop' component={ NavBar } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
