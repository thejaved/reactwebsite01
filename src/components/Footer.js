import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    const fullyear = new Date();
    return (
        <div className='Footer'>
            <h3>&#169; Copyright {fullyear.getFullYear()} <NavLink to='./about'>TheJaved</NavLink>. All Rights Reserved.</h3>
        </div>
    )
}
export default Footer;
