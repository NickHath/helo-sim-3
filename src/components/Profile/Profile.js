import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import ProfileEditor from '../ProfileEditor/ProfileEditor';
import './Profile.css';

export default class Profile extends Component {
  render() {
    return(
      <div className='profile'>
        <NavBar page='Profile'/>
        <div className='profile_info'>
          <div className='profile_photo_name'>
            <img src='http://www.desicomments.com/dc/21/48574/485741.jpg'/>
            <p>Sample Name</p>
          </div>
          <div className='profile_buttons'>
            <button className='update_button'>Update</button>
            <button className='cancel_button'>Cancel</button>
          </div>
        </div>
        <ProfileEditor />
      </div>
    );
  }
}