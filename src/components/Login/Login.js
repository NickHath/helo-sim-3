import React, { Component } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

export default class Login extends Component {
  render() {
    return(
      <div class='login'>
        <div className='login_box'>
          <div className='login_content'>
            <img src={logo}/>
            <h1>Helo</h1>
            <button>Login / Register</button>
          </div>
        </div>
      </div>
    );
  }
}