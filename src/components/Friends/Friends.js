import React, { Component } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';

export default class Friends extends Component {
  render() {
    return(
      <div className='friends'>
        <div className='sort_friends'>
          <p>Recommended Friends</p>
        </div>
        <div className='display_friends'>
          <Friend />
        </div>
      </div>
    );
  }
}