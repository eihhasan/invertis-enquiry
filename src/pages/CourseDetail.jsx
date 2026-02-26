import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, GraduationCap, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import ApplyForm from '../components/ApplyForm';

import './CourseDetail.css';

const courseData = {
    // UG PROGRAMS
    'btech': {
        name: 'Bachelor of Technology (B.Tech)',
        category: 'Undergraduate',
        about: 'B.Tech is a 4-year undergraduate program focused on engineering fundamentals, innovation, and practical skills. It prepares students for high-impact roles in the global tech industry.',
        duration: '4 Years',
        eligibility: '10+2 with Physics, Mathematics as compulsory subjects along with one of Chemistry/Biotechnology/Biology/Technical Vocational subject.',
        detailed_eligibility: 'Candidates must have passed 10+2 with at least 50% marks (45% for SC/ST) in the above subjects taken together. Admission is based on IUET / JEE Main / CUET scores.',
        admission_procedure: [
            'Fill the online/offline application form.',
            'Appear for IUET (Invertis University Entrance Test) or submit JEE/CUET scores.',
            'Participate in the counseling process.',
            'Document verification and fee submission.'
        ],
        fee: '₹1,20,000 per year',
        image: '/btech.png',
        syllabus: ['Data Structures & Algorithms', 'Operating Systems', 'Database Management', 'Artificial Intelligence', 'Software Engineering'],
        programme_structure: [
            { year: 'Year 1', subjects: ['Engineering Mathematics', 'Physics', 'Programming for Problem Solving', 'Workshop Practices'] },
            { year: 'Year 2', subjects: ['Data Structures', 'Discrete Mathematics', 'Computer Architecture', 'Digital Electronics'] },
            { year: 'Year 3', subjects: ['Design & Analysis of Algorithms', 'Theory of Computation', 'Microprocessors', 'Web Tech'] },
            { year: 'Year 4', subjects: ['Machine Learning', 'Cloud Computing', 'Major Project', 'Industrial Internship'] }
        ],
        opportunities: ['Software Engineer', 'Data Scientist', 'Automation Expert', 'System Architect'],
        career_path: 'B.Tech graduates have a wide range of career opportunities in both public and private sectors. From global giants like Google and Amazon to core sectors like Power and Infrastructure, the demand for skilled engineers is ever-growing.',
        highlights: ['Industry-aligned curriculum', 'Advanced Research Labs', 'Innovation Hub Access']
    },
    'bpharm': {
        name: 'Bachelor of Pharmacy (B.Pharma)',
        category: 'Undergraduate',
        about: 'B.Pharma is an undergraduate academic program in the field of pharmacy. The course exposes students to information about drugs, medicines, and various pharmaceutical processes.',
        duration: '4 Years',
        eligibility: '10+2 with Physics and Chemistry as compulsory subjects along with one of Mathematics/Biology.',
        detailed_eligibility: 'Minimum 50% marks in 10+2 (45% for SC/ST). Candidates must be at least 17 years old. Admission through IUET / UPSEE / CUET.',
        admission_procedure: [
            'Submit application form via portal.',
            'Review of eligibility based on 12th marks.',
            'Entrance test performance evaluation.',
            'Final interview and admission confirmation.'
        ],
        fee: '₹1,10,000 per year',
        image: '/bpharma.png',
        syllabus: ['Pharmaceutics', 'Pharmaceutical Chemistry', 'Pharmacology', 'Pharmacognosy', 'Hospital Pharmacy'],
        programme_structure: [
            { year: 'Year 1', subjects: ['Human Anatomy', 'Pharmaceutics I', 'Inorganic Chemistry', 'Remedial Biology'] },
            { year: 'Year 2', subjects: ['Organic Chemistry II', 'Physical Pharmaceutics', 'Microbiology', 'Engineering'] },
            { year: 'Year 3', subjects: ['Medicinal Chemistry', 'Industrial Pharmacy', 'Pharmacology II', 'Jurisprudence'] },
            { year: 'Year 4', subjects: ['Quality Assurance', 'Instrumental Analysis', 'Pharmacy Practice', 'Novel Drug Delivery'] }
        ],
        opportunities: ['Pharmacist', 'Drug Inspector', 'Quality Control Lab', 'R&D Scientist'],
        career_path: 'Pharmacy is a recession-proof sector. Graduates can work in retail and hospital pharmacies, pharmaceutical sales, manufacturing, and research. Many also pursue higher studies (M.Pharm) or start their own ventures.',
        highlights: ['Well-equipped Pharmaceutics Labs', 'Hospital Internship', 'Herbal Garden Access']
    },
    'bba': {
        name: 'Bachelor of Business Administration (BBA)',
        category: 'Undergraduate',
        about: 'BBA provides a strong foundation in business principles and management. It is designed for students aspiring to take on leadership roles in the corporate world.',
        duration: '3 Years',
        eligibility: '10+2 in any stream from a recognized board.',
        detailed_eligibility: 'Candidates must have secured a minimum of 50% aggregate (45% for reserved categories). Direct admission based on merit or IUET score.',
        admission_procedure: [
            'Application submission.',
            'Merit-based screening of 12th results.',
            'Personal Interview (PI) round.',
            'Seat allocation and enrollment.'
        ],
        fee: '₹60,000 per year',
        image: '/bba.jpg',
        syllabus: ['Principles of Management', 'Business Economics', 'Financial Accounting', 'Marketing Management', 'Organizational Behavior'],
        programme_structure: [
            { year: 'Year 1', subjects: ['Management Ethics', 'Business Communication', 'Macro Economics', 'Accounting'] },
            { year: 'Year 2', subjects: ['HRM', 'Financial Management', 'Business Law', 'Marketing Research'] },
            { year: 'Year 3', subjects: ['Strategic Management', 'Entrepreneurship', 'International Business', 'Major Project'] }
        ],
        opportunities: ['Business Analyst', 'HR Assistant', 'Marketing Trainee', 'Operations Executive'],
        career_path: 'BBA acts as a gateway to numerous professional opportunities. It opens doors to roles in Marketing, Finance, HR, and Operations. It is also an excellent stepping stone for a high-value MBA degree.',
        highlights: ['Focus on Soft Skills', 'Corporate Internships', 'Entrepreneurship Workshops']
    },
    'bca': {
        name: 'Bachelor of Computer Applications (BCA)',
        category: 'Undergraduate',
        about: 'BCA is a 3-year degree for those interested in computer applications and software development. It bridges the gap between technology and business.',
        duration: '3 Years',
        eligibility: '10+2 with Mathematics as a subject at high school level.',
        detailed_eligibility: 'Minimum 50% aggregate (45% for SC/ST). Candidates should have a flair for programming and logical reasoning. Admission through IUET / Merit.',
        admission_procedure: [
            'Online registration on the University website.',
            'Initial screening based on 10th & 12th marks.',
            'Counseling session for specialization choice.',
            'Final admission and document submission.'
        ],
        fee: '₹55,000 per year',
        image: '/bca.jpg',
        syllabus: ['C/C++ Programming', 'Web Technologies', 'Java & Python', 'Networking', 'Cyber Security'],
        programme_structure: [
            { year: 'Year 1', subjects: ['Computer Fundamentals', 'C Programming', 'Mathematics I', 'Communication Skills'] },
            { year: 'Year 2', subjects: ['Data Structures', 'Database Systems', 'Java Programming', 'Software Engineering'] },
            { year: 'Year 3', subjects: ['Python for Data Science', 'Web Development', 'Mobile App Dev', 'Major Project'] }
        ],
        opportunities: ['Web Developer', 'Software Support', 'IT Executive', 'System Analyst'],
        career_path: 'BCA is the starting point for a versatile IT career. Graduates can work in software development, web design, and systems management. It also provides a solid base for MCA or specialized certifications.',
        highlights: ['Coding Bootcamps', 'Modern Computing Labs', 'Live Projects']
    },
    // PG PROGRAMS
    'mba': {
        name: 'Master of Business Administration (MBA)',
        category: 'Postgraduate',
        about: 'Our MBA program focuses on developing leadership qualities, strategic thinking, and management skills required to excel in today’s competitive business environment.',
        duration: '2 Years',
        eligibility: 'Graduation in any discipline from a recognized University.',
        detailed_eligibility: 'Graduates with min 50% marks. Preference given to candidates with valid CAT/MAT/IUET scores. Work experience is a plus but not mandatory.',
        admission_procedure: [
            'Application via University portal.',
            'Shortlisting based on Graduation/Entrance scores.',
            'Group Discussion (GD) & Personal Interview (PI).',
            'Final selection and fee installment.'
        ],
        fee: '₹1,40,000 per year',
        image: '/mba.png',
        syllabus: ['Strategic Management', 'International Business', 'Digital Marketing', 'Consumer Behavior', 'Supply Chain Management'],
        programme_structure: [
            { year: 'Year 1', subjects: ['Managerial Economics', 'Stats for Management', 'Corporate Finance', 'Global Business'] },
            { year: 'Year 2', subjects: ['Specialization Electives', 'Summer Internship', 'Strategic Leadership', 'Dissertation'] }
        ],
        opportunities: ['Product Manager', 'HR Consultant', 'Marketing Executive', 'Financial Analyst'],
        career_path: 'An MBA from Invertis opens doors to leadership positions in top-tier organizations. Graduates find roles in strategy, consulting, top-end finance, and specialized marketing domains globally.',
        highlights: ['Case Study Pedagogy', 'Corporate Mentorship', 'Global Business Immersion']
    },
    'mca': {
        name: 'Master of Computer Applications (MCA)',
        category: 'Postgraduate',
        about: 'MCA is a professional master’s degree in computer science. The course is designed to meet the growing demand for qualified professionals in information technology.',
        duration: '2 Years',
        eligibility: 'Passed BCA/ Bachelor Degree in Computer Science Engineering or equivalent Degree.',
        detailed_eligibility: 'Minimum 50% marks (45% for SC/ST) in graduation. Candidates from other streams must have Mathematics at 10+2 level. Admission via IUET/CUET.',
        admission_procedure: [
            'Application form filling.',
            'Entrance test (IUET/CUET) performance check.',
            'Academic document verification.',
            'Counseling and seat allotment.'
        ],
        fee: '₹90,000 per year',
        image: '/mca.jpg',
        syllabus: ['Advanced Java', 'Cloud Computing', 'Big Data Analytics', 'Mobile App Dev', 'Machine Learning'],
        programme_structure: [
            { year: 'Year 1', subjects: ['Advanced Data Structures', 'Computer Networks', 'Software Project Management', 'Cloud Fundamentals'] },
            { year: 'Year 2', subjects: ['AI & Machine Learning', 'Big Data Analytics', 'Mobile Development', 'Seminar & Research Project'] }
        ],
        opportunities: ['App Developer', 'System Administrator', 'Network Engineer', 'IT Consultant'],
        career_path: 'MCA professionals are highly sought after in the software industry. With deeper technical expertise, they often start as senior developers or consultants and move into project management and architecture roles.',
        highlights: ['Full-stack Development Training', 'Cloud Computing Electives', 'Project-based Learning']
    },
    // DIPLOMA PROGRAMS
    'polytechnic': {
        name: 'Diploma in Engineering (Polytechnic)',
        category: 'Diploma',
        about: 'Diploma in Engineering provides technical knowledge and practical skills in various engineering disciplines like CS, ME, CE, and EE.',
        duration: '3 Years',
        eligibility: '10th standard with Science and Mathematics as subjects.',
        detailed_eligibility: 'Minimum 45% marks in 10th (40% for SC/ST). Direct admission based on 10th merit or JEECUP scores.',
        admission_procedure: [
            'Submit 10th marksheet and application.',
            'Merit list publication.',
            'Counseling for branch selection (CS/ME/CE/EE).',
            'Fee payment and enrollment.'
        ],
        fee: '₹45,000 per year',
        image: '/polytechnic.jpg',
        syllabus: ['Applied Physics/Maths', 'Basic Engineering Drawing', 'Subject-specific Labs', 'Industrial Training'],
        programme_structure: [
            { year: 'Year 1', subjects: ['Applied Science', 'Engineering Drawing', 'Basic Workshop', 'Intro to IT'] },
            { year: 'Year 2', subjects: ['Core Engineering Subjects (Branch specific)', 'Communication Skills'] },
            { year: 'Year 3', subjects: ['Advanced Core Subjects', 'Industrial Visit', 'Major Project'] }
        ],
        opportunities: ['Junior Engineer', 'Technical Assistant', 'Site Supervisor', 'Production Incharge'],
        career_path: 'Polytechnic is the fastest route to a technical career. Most students find immediate employment as Junior Engineers in Govt. and Private sectors or opt for Lateral Entry into the 2nd year of B.Tech.',
        highlights: ['Heavy focus on Practical Skills', 'Affordable Education', 'Direct Entry to B.Tech 2nd Year']
    },
    'dpharm': {
        name: 'Diploma in Pharmacy (D.Pharma)',
        category: 'Diploma',
        about: 'D.Pharma is a short-term course for students interested in pharmacy sector. It covers foundational knowledge of pharmaceutical science.',
        duration: '2 Years',
        eligibility: '10+2 with Physics and Chemistry along with Mathematics or Biology.',
        detailed_eligibility: 'Minimum 50% marks in 10+2. Age must be 17+. Admission based on merit and counseling.',
        admission_procedure: [
            'Registration through online portal.',
            'Eligibility check based on science stream marks.',
            'Document verification in campus.',
            'Final admission.'
        ],
        fee: '₹65,000 per year',
        image: '/dpharma.jpg',
        syllabus: ['Pharmacognosy', 'Pharmaceutical Jurisprudence', 'Health Education', 'Drug Store Management'],
        programme_structure: [
            { year: 'Year 1', subjects: ['Pharmaceutics I', 'Chemistry I', 'Pharmacognosy', 'Biochemistry'] },
            { year: 'Year 2', subjects: ['Pharmaceutics II', 'Pharmacology', 'Jurisprudence', 'DSBM'] }
        ],
        opportunities: ['Retail Pharmacist', 'Hospital Pharmacist', 'Medical Transcriptionist'],
        career_path: 'D.Pharma allows students to become registered pharmacists quickly. It is ideal for those looking to open their own pharmacy or work in public health dispensaries.',
        highlights: ['Clinical Exposure', 'Registered Pharmacist Status', 'Quick Career Start']
    },
    // DOCTORAL PROGRAMS
    'phd': {
        name: 'Ph.D (Doctoral Studies)',
        category: 'Doctoral',
        about: 'Invertis University offers Ph.D programs in Pharmacy, Engineering, Management, and Science for those committed to high-level research.',
        duration: '3-5 Years',
        eligibility: 'Master’s degree or a professional degree equivalent to the Master’s degree.',
        detailed_eligibility: 'Minimum 55% marks (50% for SC/ST) in relevant postgraduate degree. Admission through Entrance Test followed by Interview.',
        admission_procedure: [
            'Submit Research Proposal and Application.',
            'Appear for Ph.D Entrance Test (PET).',
            'Presentation before the Research Degree Committee (RDC).',
            'Registration and supervisor allotment.'
        ],
        fee: '₹50,000 per annum',
        image: '/phd.jpg',
        syllabus: ['Research Methodology', 'Subject specialization', 'Thesis writing', 'Industrial collaboration research'],
        programme_structure: [
            { year: 'Course Work', subjects: ['Research Methodology', 'Review of Literature', 'Computer Applications', 'Ethics'] },
            { year: 'Research Phase', subjects: ['Topic Finalization', 'Data Collection', 'Thesis Writing', 'Viva-Voce'] }
        ],
        opportunities: ['Professor', 'Lead Scientist', 'Policy Advisor', 'Subject Matter Expert'],
        career_path: 'A Ph.D. is the highest academic achievement. It leads to careers in top-tier academia, advanced R&D labs, and high-level consulting or policy-making roles.',
        highlights: ['Experienced Research Supervisors', 'Journal Publication Support', 'Modern Research Facilities']
    }
};

const CourseDetail = () => {
    const { courseId } = useParams();
    const course = courseData[courseId.toLowerCase()];

    if (!course) {
        return <div className="container section text-center">
            <h2>Course not found</h2>
            <Link to="/" className="btn btn-primary mt-20">Browse All Courses</Link>
        </div>;
    }

    return (
        <div className="course-detail-page">
            {/* Course Hero Section */}
            <header className="course-hero" style={{ backgroundImage: `url(${course.image})` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-container">
                    <div className="hero-text-content">
                        <div className="breadcrumb">
                            <Link to="/">Home</Link> &gt; <span>{course.category}</span> &gt; <span>{courseId.toUpperCase()}</span>
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
                                <span>{course.category} Level</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-form-container">
                        <ApplyForm isCompact={true} initialCourse={course.name} />
                    </div>
                </div>
            </header>

            {/* Main Content Sections */}
            <section className="course-details-main section">
                <div className="container">
                    <div className="details-layout">
                        {/* Left Column: Extensive Info */}
                        <div className="details-left">

                            {/* Eligibility Section */}
                            <div className="content-block">
                                <h2 className="section-title">Eligibility Criteria</h2>
                                <div className="eligibility-box">
                                    <p className="main-eligibility"><strong>Basic Requirement:</strong> {course.eligibility}</p>
                                    <p className="detailed-eligibility">{course.detailed_eligibility}</p>
                                </div>
                            </div>

                            {/* Admission Procedure */}
                            <div className="content-block">
                                <h2 className="section-title">Admission Procedure</h2>
                                <div className="admission-timeline">
                                    {course.admission_procedure.map((step, idx) => (
                                        <div key={idx} className="timeline-item">
                                            <div className="step-num">{idx + 1}</div>
                                            <div className="step-text">{step}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Programme Structure */}
                            {course.programme_structure && (
                                <div className="content-block">
                                    <h2 className="section-title">Programme Structure</h2>
                                    <div className="structure-grid">
                                        {course.programme_structure.map((item, idx) => (
                                            <div key={idx} className="year-box">
                                                <h4>{item.year}</h4>
                                                <ul>
                                                    {item.subjects.map((sub, sidx) => (
                                                        <li key={sidx}>{sub}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Syllabus Highlights */}
                            <div className="content-block">
                                <h2 className="section-title">Syllabus Highlights</h2>
                                <div className="syllabus-tags">
                                    {course.syllabus.map((item, idx) => (
                                        <span key={idx} className="syllabus-tag">{item}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Career Path */}
                            <div className="content-block career-roadmap">
                                <h2 className="section-title">Career Path & Opportunities</h2>
                                <p className="career-desc">{course.career_path}</p>
                                <div className="opportunities-list">
                                    {course.opportunities.map((item, idx) => (
                                        <div key={idx} className="opportunity-item">
                                            <CheckCircle size={18} className="icon" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Fee & Highlights Sidebar */}
                        <div className="details-sidebar">
                            <div className="sidebar-card fee-card">
                                <h3>Total Academic Fee</h3>
                                <div className="fee-value">{course.fee}</div>
                                <p className="fee-disclaimer">* Terms & conditions apply as per University norms.</p>
                                <button className="btn btn-primary w-full">Download Fee Breakup</button>
                            </div>

                            <div className="sidebar-card highlights-card">
                                <h3>Course Highlights</h3>
                                <ul>
                                    {course.highlights.map((item, idx) => (
                                        <li key={idx}>
                                            <ArrowRight size={16} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetail;
