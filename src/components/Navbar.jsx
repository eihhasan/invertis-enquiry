import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Invertis University Logo" className="logo-img" />
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>About College</NavLink>
                    <div className="dropdown">
                        <span className="dropdown-trigger">Courses</span>
                        <div className="dropdown-content">
                            <Link to="/courses/btech" onClick={() => setIsOpen(false)}>B.Tech</Link>
                            <Link to="/courses/bpharma" onClick={() => setIsOpen(false)}>B.Pharma</Link>
                            <Link to="/courses/mba" onClick={() => setIsOpen(false)}>MBA</Link>
                            <Link to="/courses/mca" onClick={() => setIsOpen(false)}>MCA</Link>
                        </div>
                    </div>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
                    <Link to="/contact" className="btn btn-primary nav-btn" onClick={() => setIsOpen(false)}>Apply Now</Link>
                </div>

                <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
