import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <Link to="/" className="logo footer-logo">
                            <img src="/logo.png" alt="Invertis University Logo" className="logo-img" />
                        </Link>
                        <p className="footer-desc">
                            Building your future with excellence through quality education and industry exposure.
                        </p>
                        <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About College</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Popular Courses</h3>
                        <ul>
                            <li><Link to="/courses/btech">B.Tech</Link></li>
                            <li><Link to="/courses/bpharma">B.Pharma</Link></li>
                            <li><Link to="/courses/mba">MBA</Link></li>
                            <li><Link to="/courses/mca">MCA</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} className="icon" />
                                <span>Invertis Village, Bareilly-Lucknow NH-24, Bareilly</span>
                            </li>
                            <li>
                                <Phone size={18} className="icon" />
                                <span>+91 123 456 7890</span>
                            </li>
                            <li>
                                <Mail size={18} className="icon" />
                                <span>admissions@invertis.ac.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Invertis University. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
