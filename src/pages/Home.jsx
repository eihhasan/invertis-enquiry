import React from 'react';
import { ArrowRight, GraduationCap, Building2, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <header className="home-hero" style={{ backgroundImage: 'url(/school1.jpg)' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-text-content">
                        <h1>Build Your Future With Excellence</h1>
                        <p className="hero-description">
                            Invertis University offers a world-class learning experience with industry-aligned
                            curriculum, modern facilities, and expert faculty to help you achieve your career goals.
                        </p>
                        <div className="hero-btns">
                            <a href="#popular-courses" className="btn btn-primary">View Courses</a>
                            <a href="#apply-now" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Learn More</a>
                        </div>
                    </div>

                </div>
            </header>

            {/* About Section Short */}
            <section className="about-short section">
                <div className="container">
                    <h2>Our Vision</h2>
                    <p>
                        We aim to be a leader in global education, fostering innovation,
                        research, and holistic development to create future leaders who
                        contribute positively to society and industry.
                    </p>
                </div>
            </section>

            {/* Popular Courses Grid */}
            <section className="courses-section section" id="popular-courses">
                <div className="container">
                    <h2>Popular Courses</h2>
                    <div className="courses-grid">
                        <CourseCard
                            name="B.Tech"
                            desc="4-year engineering program with specializations in CS, ME, ECE and more."
                            link="/courses/btech"
                        />
                        <CourseCard
                            name="BBA"
                            desc="Foundational management program for future business leaders and entrepreneurs."
                            link="/courses/bba"
                        />
                        <CourseCard
                            name="B.Pharma"
                            desc="Comprehensive undergraduate program in pharmaceutical sciences and healthcare."
                            link="/courses/bpharm"
                        />
                        <CourseCard
                            name="MBA"
                            desc="Advanced management program focused on leadership and business strategy."
                            link="/courses/mba"
                        />
                        <CourseCard
                            name="Diploma (Poly)"
                            desc="Technical diploma in engineering for practical skill development and junior roles."
                            link="/courses/polytechnic"
                        />
                        <CourseCard
                            name="Ph.D"
                            desc="Research-based doctoral programs for advanced specialization and discovery."
                            link="/courses/phd"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-section section">
                <div className="container">
                    <h2>Why Choose Us</h2>
                    <div className="why-grid">
                        <WhyItem
                            icon={<Users />}
                            title="Experienced Faculty"
                            desc="Learn from industry experts and highly qualified academicians."
                        />
                        <WhyItem
                            icon={<Building2 />}
                            title="Modern Campus"
                            desc="State-of-the-art labs, libraries, and smart classrooms."
                        />
                        <WhyItem
                            icon={<GraduationCap />}
                            title="Industry Exposure"
                            desc="Regular workshops, seminars, and industrial visits."
                        />
                        <WhyItem
                            icon={<Briefcase />}
                            title="Placement Support"
                            desc="Excellent placement record with top global recruiters."
                        />
                    </div>
                </div>
            </section>


        </div>
    );
};

const CourseCard = ({ name, desc, link }) => (
    <div className="course-card">
        <h3>{name}</h3>
        <p>{desc}</p>
        <Link to={link} className="view-details">
            View Details <ArrowRight size={16} />
        </Link>
    </div>
);

const WhyItem = ({ icon, title, desc }) => (
    <div className="why-item">
        <div className="icon-box">{icon}</div>
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
);

export default Home;
