import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ApplyForm from '../components/ApplyForm';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Header */}
            <header className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We are here to help you. Reach out for any queries.</p>
                </div>
            </header>

            {/* Contact Info Section */}
            <section className="section">
                <div className="container contact-grid">
                    <div className="contact-info-cards">
                        <div className="contact-card">
                            <div className="icon-box"><Phone /></div>
                            <h3>Call Us</h3>
                            <p>+91 123 456 7890</p>
                            <p>+91 098 765 4321</p>
                        </div>
                        <div className="contact-card">
                            <div className="icon-box"><Mail /></div>
                            <h3>Email Us</h3>
                            <p>admissions@invertis.ac.in</p>
                            <p>info@invertis.ac.in</p>
                        </div>
                        <div className="contact-card">
                            <div className="icon-box"><MapPin /></div>
                            <h3>Visit Us</h3>
                            <p>Invertis Village, Bareilly-Lucknow NH-24, Bareilly, Uttar Pradesh</p>
                        </div>
                        <div className="contact-card">
                            <div className="icon-box"><Clock /></div>
                            <h3>Office Hours</h3>
                            <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reuse Apply Form as Contact Form */}
            <div className="contact-form-wrapper">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <h2>Send us a Message</h2>
                        <p style={{ color: 'var(--text-muted)' }}>Fill out the form below and we will get back to you shortly.</p>
                    </div>
                </div>
                <ApplyForm />
            </div>

            {/* Map Placeholder */}
            <section className="section map-section">
                <div className="container">
                    <div className="map-placeholder">
                        <p>Interactive Map Integration Coming Soon</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
