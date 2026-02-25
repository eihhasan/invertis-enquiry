import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, GraduationCap, Briefcase, CheckCircle } from 'lucide-react';
import ApplyForm from '../components/ApplyForm';
import './CourseDetail.css';

const courseData = {
    'btech': {
        name: 'Bachelor of Technology (B.Tech)',
        about: 'B.Tech is a 4-year undergraduate program focused on engineering fundamentals, innovation, and practical skills. It prepares students for high-impact roles in the global tech industry.',
        duration: '4 Years',
        eligibility: '12th with PCM (Physics, Chemistry, Mathematics)',
        image: '/btech.jpg',
        opportunities: ['Software Engineer', 'Data Scientist', 'Automation Expert', 'System Architect'],
        highlights: ['Industry-aligned curriculum', 'Advanced Research Labs', 'Innovation Hub Access']
    },
    'bpharma': {
        name: 'Bachelor of Pharmacy (B.Pharma)',
        about: 'B.Pharma is an undergraduate academic program in the field of pharmacy. The course exposes students to information about drugs, medicines, and various pharmaceutical processes.',
        duration: '4 Years',
        eligibility: '12th with PCB or PCM (Biology/Mathematics)',
        image: '/bpharma.jpg',
        opportunities: ['Pharmacist', 'Drug Inspector', 'Quality Control Lab', 'R&D Scientist'],
        highlights: ['Well-equipped Pharmaceutics Labs', 'Hospital Internship', 'Herbal Garden Access']
    },
    'mba': {
        name: 'Master of Business Administration (MBA)',
        about: 'Our MBA program focuses on developing leadership qualities, strategic thinking, and management skills required to excel in today’s competitive business environment.',
        duration: '2 Years',
        eligibility: 'Graduation in any discipline with min 50% marks',
        image: '/mba.jpg',
        opportunities: ['Product Manager', 'HR Consultant', 'Marketing Executive', 'Financial Analyst'],
        highlights: ['Case Study Pedagogy', 'Corporate Mentorship', 'Global Business Immersion']
    },
    'mca': {
        name: 'Master of Computer Applications (MCA)',
        about: 'MCA is a professional master’s degree in computer science. The course is designed to meet the growing demand for qualified professionals in the field of Information Technology.',
        duration: '2 Years',
        eligibility: 'BCA or Graduation with Mathematics as a subject',
        image: '/mca.jpg',
        opportunities: ['App Developer', 'System Administrator', 'Network Engineer', 'IT Consultant'],
        highlights: ['Full-stack Development Training', 'Cloud Computing Electives', 'Project-based Learning']
    }
};

const CourseDetail = () => {
    const { courseId } = useParams();
    const course = courseData[courseId.toLowerCase()];

    if (!course) {
        return <div className="container section"><h2>Course not found</h2></div>;
    }

    return (
        <div className="course-detail-page">
            {/* Course Hero Section */}
            <header className="course-hero" style={{ backgroundImage: `url(${course.image})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-text-content">
                        <div className="breadcrumb">
                            <Link to="/">Home</Link> &gt; <Link to="/#popular-courses">Courses</Link> &gt; <span>{courseId.toUpperCase()}</span>
                        </div>
                        <h1>{course.name}</h1>
                        <p className="hero-description">{course.about}</p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <Clock size={20} />
                                <span>{course.duration}</span>
                            </div>
                            <div className="stat-item">
                                <GraduationCap size={20} />
                                <span>{course.eligibility}</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-form-container">
                        <ApplyForm isCompact={true} initialCourse={course.name} />
                    </div>
                </div>
            </header>

            {/* Details Section */}
            <section className="section course-details-section">
                <div className="container details-grid">
                    <div className="details-card">
                        <h3><Briefcase size={22} color="var(--primary)" /> Career Opportunities</h3>
                        <ul>
                            {course.opportunities.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="highlights-card">
                        <h3><CheckCircle size={22} color="var(--primary)" /> Key Highlights</h3>
                        <ul>
                            {course.highlights.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetail;
