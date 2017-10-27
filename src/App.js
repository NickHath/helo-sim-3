import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path='/' component={ Home } />
      </HashRouter>
    );
  }
}

export default App;
