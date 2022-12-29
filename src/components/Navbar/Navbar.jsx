import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData } from "./NavbarData";
import LanguageSelector from "../Language";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { t, i18n } = useTranslation();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <LanguageSelector />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            <li className="profile">
              <img
                src="img/profile-img.jpg"
                alt=""
                className="rounded-circle"
              />
              <h1 className="text-light">
                <NavLink to="index.html">Cristian Arana</NavLink>
              </h1>
              <div className="social-links mt-3 text-center">
              <a href="https://www.instagram.com/nappier90/" target="_blank">
                  <Icon icon="mdi:instagram" className="bx" />
                </a>
                <a href="https://www.linkedin.com/in/cristian-david-arana-a8959941/" target="_blank">
                  <Icon icon="ci:linkedin" />
                </a>
                <a href="https://github.com/cristianarana" className="github" target="_blank">
                  <Icon icon="radix-icons:github-logo" />
                </a>
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
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
