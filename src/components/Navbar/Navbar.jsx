import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavbarData } from './NavbarData';
import LanguageSelector from '../Language';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {  NavLink, Link } from 'react-router-dom'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>

              <li className="profile">
                <img src="/assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><NavLink to="index.html">Cristian Arana</NavLink></h1>
                <div className="social-links mt-3 text-center">
                    <Link to="https://www.instagram.com/nappier90/" className="instagram" target="_blank"><i className="bx bxl-instagram"></i></Link>
                    <Link to="https://www.linkedin.com/in/cristian-david-arana-a8959941/" className="linkedin" target="_blank"><i className="bx bxl-linkedin"></i></Link>
                    <Link to="https://github.com/cristianarana" className="github" target="_blank"><i className="bx bxl-github"></i></Link>
                </div>
                </li>
              {NavbarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li><LanguageSelector /></li>
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }

export default Navbar