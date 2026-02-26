import React, { useState } from 'react';
import './ApplyForm.css';

const ApplyForm = ({ isCompact = false, initialCourse = "" }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        course: initialCourse || 'B.Tech',
        details: '',
        message: ''
    });

    // Update course if initialCourse prop changes (e.g. navigating between course pages)
    React.useEffect(() => {
        if (initialCourse) {
            setFormData(prev => ({ ...prev, course: initialCourse }));
        }
    }, [initialCourse]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Application Submitted:', formData);
        alert('Thank you for applying! We will contact you soon.');
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            course: 'B.Tech',
            details: '',
            message: ''
        });
    };

    const formContent = (
        <div className={`apply-card ${isCompact ? 'compact' : ''}`}>
            <div className="apply-header">
                <h2>{isCompact ? 'Enquiry Now' : 'Apply Now'}</h2>
                <p>{isCompact ? 'Get course details instantly.' : 'Start your journey with us today. Fill the form below.'}</p>
            </div>
            <form className="apply-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Select Course</label>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            disabled={!!initialCourse}
                            style={initialCourse ? { backgroundColor: '#f0f0f0', cursor: 'not-allowed' } : {}}
                        >
                            <option value="B.Tech">B.Tech</option>
                            <option value="B.Pharma">B.Pharma</option>
                            <option value="MBA">MBA</option>
                            <option value="MCA">MCA</option>
                        </select>
                    </div>
                    {!isCompact && (
                        <>
                            <div className="form-group full-width">
                                <label>12th / Graduation Details</label>
                                <input
                                    type="text"
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder="e.g. CBSE 12th - 85%"
                                    required
                                />
                            </div>
                            <div className="form-group full-width">
                                <label>Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                    rows="4"
                                ></textarea>
                            </div>
                        </>
                    )}
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                    {isCompact ? 'Submit Enquiry' : 'Apply Now'}
                </button>
            </form>
        </div>
    );

    if (isCompact) return formContent;

    return (
        <section className="apply-section section" id="apply-now">
            <div className="container">
                {formContent}
            </div>
        </section>
    );
};

export default ApplyForm;
