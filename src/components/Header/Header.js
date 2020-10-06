import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logos/Group 1329.png";
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img style={{width: '13%'}} src={logo} alt=""/>
                <div className="navbar-collapse link">
                    <Link to="/" className="nav-link ml-5">
                        <button className="btn">Home</button>
                    </Link>
                    <Link to="/" className="nav-link">
                        <button className="btn">Donation</button>
                    </Link>
                    <Link to="/" className="nav-link">
                        <button className="btn">Events</button>
                    </Link>
                    <Link to="/" className="nav-link">
                        <button className="btn">Blog</button>
                    </Link>
                    <Link to="/" className="nav-link">
                        <button className='btn btn-primary'>Register</button>
                    </Link>
                    <Link to="/admin" className="nav-link">
                        <button className='btn btn-dark'>Admin</button>
                    </Link>
            </div>
        </nav>
    );
};

export default Header;
