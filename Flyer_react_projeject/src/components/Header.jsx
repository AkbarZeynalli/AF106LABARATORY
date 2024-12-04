import React from 'react'
import "../assets/css/header.css"
import Logo from '../assets/img/logo.png'
import { FaRegMoon } from "react-icons/fa"
const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={Logo} alt="logo" />
            <span>Flyer</span>
        </div>
        <ul className='navbar'>
            <li>Light </li><FaRegMoon/>
            <li>Dark</li>
        </ul>
    </div>
  )
}

export default Header
