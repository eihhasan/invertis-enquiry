import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(prev => {
            if (prev) setIsDropdownOpen(false);
            return !prev;
        });
    };

    const toggleDropdown = (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            e.stopPropagation();
            setIsDropdownOpen(prev => !prev);
        }
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Invertis University Logo" className="logo-img" />
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>

                    <div className={`dropdown ${isDropdownOpen ? 'mobile-open' : ''}`}>
                        <span className="dropdown-trigger" onClick={toggleDropdown}>
                            Courses
                            <svg
                                className={`dropdown-icon ${isDropdownOpen ? 'rotated' : ''}`}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </span>

                        <div className="dropdown-content">
                            <div className="dropdown-section">
                                <h6>UG Programs</h6>
                                <Link to="/courses/btech" onClick={handleLinkClick}>B.Tech</Link>
                                <Link to="/courses/bpharm" onClick={handleLinkClick}>B.Pharma</Link>
                                <Link to="/courses/bba" onClick={handleLinkClick}>BBA</Link>
                                <Link to="/courses/bca" onClick={handleLinkClick}>BCA</Link>
                            </div>
                            <div className="dropdown-section">
                                <h6>PG Programs</h6>
                                <Link to="/courses/mba" onClick={handleLinkClick}>MBA</Link>
                                <Link to="/courses/mca" onClick={handleLinkClick}>MCA</Link>
                            </div>
                            <div className="dropdown-section">
                                <h6>Others</h6>
                                <Link to="/courses/polytechnic" onClick={handleLinkClick}>Diploma (Poly)</Link>
                                <Link to="/courses/dpharm" onClick={handleLinkClick}>D.Pharma</Link>
                                <Link to="/courses/phd" onClick={handleLinkClick}>Ph.D</Link>
                            </div>
                        </div>
                    </div>

                    <NavLink to="/about" onClick={handleLinkClick}>About College</NavLink>
                </div>

                <button className="nav-toggle" onClick={toggleNavbar} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;