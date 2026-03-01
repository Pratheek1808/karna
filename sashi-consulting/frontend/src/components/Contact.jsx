import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ text: '', color: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ text: '', color: '' });

        try {
            // Updated endpoint assuming Flask backend runs at :5000 and React proxies or handles CORS
            const response = await fetch('http://localhost:5000/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.status === 'success') {
                setStatus({ text: '✅ Message sent successfully! We\'ll get back to you soon.', color: '#4CAF50' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ text: '❌ Something went wrong. Server returned: ' + (result.message || 'Unknown error'), color: '#e74c3c' });
            }
        } catch (error) {
            console.error('Fetch Error:', error);
            setStatus({ text: '❌ Unable to send message. Please checking your internet connection and ensure the server is running.', color: '#e74c3c' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="section cta-section">
                <div className="container text-center">
                    <h2 className="fade-in-up">Integrity. Insight. Impact.</h2>
                    <p className="fade-in-up">Partner with a firm that values your reputation as much as you do.</p>
                    <a href="#contact" className="btn btn-primary fade-in-up">Schedule a Consultation</a>
                </div>
            </section>

            <section id="contact" className="section contact">
                <div className="container">
                    <div className="row">
                        <div className="col-info fade-in-left">
                            <h2 className="section-title">Get in Touch</h2>
                            <p>Ready to elevate your financial standing? Contact us today.</p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <span className="icon">📍</span>
                                    <div>
                                        <h4>Location</h4>
                                        <p>123 Business Park, Financial District<br />Hyderabad, Telangana, 500081</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <span className="icon">📧</span>
                                    <div>
                                        <h4>Email</h4>
                                        <p>info@shashiconsulting.com</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <span className="icon">📞</span>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+91 987 654 3210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-form fade-in-right">
                            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" required placeholder="Your Name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" required placeholder="How can we help you?" value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block" id="submitBtn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                                {status.text && <p id="formStatus" style={{ marginTop: '12px', textAlign: 'center', fontWeight: '500', color: status.color }}>{status.text}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
