import React from 'react'
import { Link } from 'react-router-dom'
import "../../Components/Common/Header.css"


const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <ul className="menu-items mb-0">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="#">Category</Link></li>
                            <li><Link to="/Menu">Menu</Link></li>
                            <li><Link to="#">Testimonial</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                        <h1 className="logo mb-0">Navbar</h1>
                </div>
            </nav>
        </>
    )
}

export default Header