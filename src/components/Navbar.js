import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const NavbarActiveStyle = {
    color: "var(--primary-color)",
    borderBottom: "2px solid var(--primary-color)"
}
const Navbar = () => {
    const [newNavbar, setNewNavbar] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const addNewNavbarClass = () => {
        if (window.scrollY > 100) {
            setNewNavbar(true);
        } else {
            setNewNavbar(false);
        }
    }
    window.addEventListener('scroll', addNewNavbarClass);
    return (
        <nav className={newNavbar ? "navbar activeScroll" : "navbar"}>
            <NavLink to='/' className='navbar_logo'>TheJaved</NavLink>
            <div className={openMenu ? "navbar_container active" : "navbar_container"}>
                <ul className="navbar_links_container">
                    <li className="navbar_links"><NavLink exact className='nav_links' activeStyle={NavbarActiveStyle} to='/'>Home</NavLink></li>
                    <li className="navbar_links"><NavLink exact className='nav_links' activeStyle={NavbarActiveStyle} to='/blogs'>Blogs</NavLink></li>
                    <li className="navbar_links"><NavLink exact className='nav_links' activeStyle={NavbarActiveStyle} to='/services'>Services</NavLink></li>
                    <li className="navbar_links"><NavLink exact className='nav_links' activeStyle={NavbarActiveStyle} to='/about'>About Us</NavLink></li>
                    <li className="navbar_links"><NavLink exact className='nav_links' activeStyle={NavbarActiveStyle} to='/contact'>Contact Us</NavLink></li>
                </ul>
            </div>
            {!openMenu && <i className={openMenu ? 'bx bx-list-ul menu_btn active' : 'bx bx-list-ul menu_btn'} onClick={() => setOpenMenu(!openMenu)}></i>}
            {openMenu && <i className={openMenu ? 'bx bx-arrow-from-left menu_btn active' : 'bx bx-arrow-from-left menu_btn'} onClick={() => setOpenMenu(!openMenu)}></i>}
        </nav>
    )
}
export default Navbar;
