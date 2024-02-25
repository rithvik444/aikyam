// NavBar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Style/NavCss.css'; // Import CSS for styling
import aikyamicon from '../Images/AikyamIcon.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav>
                <Link to='/' className='title'>
                    <div className='navimg'>
                        <img src={aikyamicon} alt='Aikyam' />

                        <p>Aikyam</p></div>
                </Link>
                <div className='menu' onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

                <ul className={menuOpen ? "open" : ""}>

                    <li>
                        <NavLink to="/" className="nav-NavLink">Home</NavLink>
                    </li>


                   
                    <li>
                        <NavLink to="/learn" className="nav-NavLink">Learn</NavLink>
                    </li>
                    <li>
                        <NavLink to="/locate" className="nav-NavLink">Locate Facility</NavLink>
                    </li>
                    <li>
                        <NavLink to="/store" className="nav-NavLink">Start Recycling</NavLink>
                    </li>
                    <li className='login'>
                        <NavLink to="/login" className="nav-NavLink login">Login</NavLink>
                    </li>
                    <li className='register'>
                        <NavLink to="/signup" className="nav-NavLink register">SignUp</NavLink>
                    </li>
                </ul>
                <ul>
                    <li className='nn'>
                        <NavLink to="/login" className="nav-NavLink nn1">Login</NavLink>
                    </li>
                    <li className='nn1'>
                        <NavLink to="/register" className="nav-NavLink  nn">SignUp</NavLink>
                    </li>
                </ul>

            </nav>
          
        </>

    );
};

export default Navbar;
