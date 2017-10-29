import React from 'react';
import './NavBar.css';
import homeIcon from '../../assets/home.png'
import searchIcon from '../../assets/search.png'

const NavBar = ({page}) => (
  <div className='nav'>
    <div className="nav_contents">
      <div className='logo_nav_icons'>
        <h1>Helo</h1>
        <img src={homeIcon}/>
        <img src={searchIcon}/>
      </div>
      <div>Dashboard</div>
      <div>Logout</div>
    </div>
  </div>
);

export default NavBar;