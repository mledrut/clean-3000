import React from 'react'
import '../styles/App.scss';
import Logo from "../images/logo.png"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
        <div className="container">
            <Link to={"/"}>
                <img src={Logo} alt="" />
            </Link>  
        </div>
    </header>
  )
}

export default Header