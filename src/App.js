import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Users from './components/Users/Users';
import Friends from './components/Friends/Friends';

import Profile from './components/Profile/Profile';
import ProfileEditor from './components/ProfileEditor/ProfileEditor';

import NavBar from './components/NavBar/NavBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route exact path='/login' component={ Login } />
          <Route path='/profile' component={ Profile } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
