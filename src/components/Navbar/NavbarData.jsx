import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from "react-icons/md";

export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <MdIcons.MdWork />,
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '/education',
    icon: <MdIcons.MdSchool />,
    cName: 'nav-text'
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <MdIcons.MdFilePresent />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <MdIcons.MdContactMail />,
    cName: 'nav-text'
  }
  
];