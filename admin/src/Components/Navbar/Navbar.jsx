import React from 'react';
import './Navbar.css';
import { admin_assets } from '../../assets/admin_assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={admin_assets.logo} alt="" />
      <img className='profile' src={admin_assets.profile_image} alt="" />
    </div>
  );
}

export default Navbar;
