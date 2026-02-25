import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Header */}
            <header className="page-header">
                <div className="container">
                    <h1>About Invertis University</h1>
                    <p>A legacy of academic brilliance and innovation.</p>
                </div>
            </header>

            {/* Main Content */}
            <section className="section">
                <div className="container about-main-grid">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            Invertis University is a leading educational institution committed to providing quality
                            education and holisitic development. Since its inception, the university has been a
                            pioneer in engineering, management, and pharmacy education.
                        </p>
                        <p>
                            Our campus is spread over acres of lush green land, providing an ideal environment
                            for learning and growth. We believe in empowering students with practical knowledge
                            and global exposure.
                        </p>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h3>25+</h3>
                                <p>Years of Excellence</p>
                            </div>
                            <div className="stat-card">
                                <h3>500+</h3>
                                <p>Expert Faculty</p>
                            </div>
                            <div className="stat-card">
                                <h3>10000+</h3>
                                <p>Placed Students</p>
                            </div>
                            <div className="stat-card">
                                <h3>50+</h3>
                                <p>Global Partners</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=800" alt="University Campus" />
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section vision-mission">
                <div className="container">
                    <div className="vision-grid">
                        <div className="vision-box">
                            <h2>Our Vision</h2>
                            <p>
                                To be a globally recognized institution that nurtures talent and creates
                                innovative leaders for a better tomorrow.
                            </p>
                        </div>
                        <div className="vision-box bg-blue">
                            <h2>Our Mission</h2>
                            <p>
                                To provide world-class infrastructure, expert mentorship, and industry
                                collaboration to ensure student success in every field.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
