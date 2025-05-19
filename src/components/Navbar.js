import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png'; 
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className='leftSide'>
        <img src={Logo} alt="logo" />
      </div>

      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>

      <div className={openLinks ? "hiddenLinks open" : "hiddenLinks"}>
        <Link to="/" onClick={() => setOpenLinks(false)}>Home</Link>
        <Link to="/menu" onClick={() => setOpenLinks(false)}>Menu</Link>
        <Link to="/about" onClick={() => setOpenLinks(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpenLinks(false)}>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
