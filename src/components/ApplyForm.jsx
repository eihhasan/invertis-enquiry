import React, { useState } from 'react';
import './ApplyForm.css';

const ApplyForm = ({ isCompact = false, initialCourse = "" }) => {
    const BASE_API_URL = import.meta.env.VITE_BASE_API_URL || 'https://crm-core-server.onrender.com/api/v1';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: initialCourse || 'B.Tech',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            course: formData.course,
            source: 'Website',
        };

        try {
            const response = await fetch(`${BASE_API_URL}/create-lead`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                course: initialCourse || 'B.Tech',
            });
            setStatus('success');
        } catch (err) {
            console.error('Lead submission failed:', err);
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const formContent = (
        <div className={`apply-card ${isCompact ? 'compact' : ''}`}>
            <div className="apply-header">
                <h2>{isCompact ? 'Enquiry Now' : 'Apply Now'}</h2>
                <p>{isCompact ? 'Get course details instantly.' : 'Start your journey with us today. Fill the form below.'}</p>
            </div>

            {status === 'success' && (
                <div className="form-status success">
                    ✅ Thank you! We will contact you soon.
                </div>
            )}
            {status === 'error' && (
                <div className="form-status error">
                    ❌ Something went wrong. Please try again.
                </div>
            )}

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
                </div>
                <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : isCompact ? 'Submit Enquiry' : 'Apply Now'}
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