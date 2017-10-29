import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Friends from '../Friends/Friends';
import './Dashboard.css';

export default class Dashboard extends Component {
  render() {
    return(
      <div className='dashboard'>
        <NavBar page='Dashboard'/>
        <Friends />
      </div>
    );
  }
}