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
                    <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>   <div className="dropdown">
                        <span className="dropdown-trigger">
                            Courses
                            <svg
                                className="dropdown-icon"
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
                                <Link to="/courses/btech" onClick={() => setIsOpen(false)}>B.Tech</Link>
                                <Link to="/courses/bpharm" onClick={() => setIsOpen(false)}>B.Pharma</Link>
                                <Link to="/courses/bba" onClick={() => setIsOpen(false)}>BBA</Link>
                                <Link to="/courses/bca" onClick={() => setIsOpen(false)}>BCA</Link>
                            </div>
                            <div className="dropdown-section">
                                <h6>PG Programs</h6>
                                <Link to="/courses/mba" onClick={() => setIsOpen(false)}>MBA</Link>
                                <Link to="/courses/mca" onClick={() => setIsOpen(false)}>MCA</Link>
                            </div>
                            <div className="dropdown-section">
                                <h6>Others</h6>
                                <Link to="/courses/polytechnic" onClick={() => setIsOpen(false)}>Diploma (Poly)</Link>
                                <Link to="/courses/dpharm" onClick={() => setIsOpen(false)}>D.Pharma</Link>
                                <Link to="/courses/phd" onClick={() => setIsOpen(false)}>Ph.D</Link>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>About College</NavLink>


                </div>

                <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
