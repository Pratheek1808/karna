import React from 'react';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="row">
                    <div className="col-img fade-in-left">
                        <div className="about-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                                alt="Shashi Consulting Services Team"
                                className="about-img"
                            />
                        </div>
                    </div>
                    <div className="col-text fade-in-right">
                        <h2 className="section-title">About <span className="gold-text">Shashi Consulting Services</span></h2>
                        <p>At Shashi Consulting Services, we believe that financial transparency is the bedrock of business
                            success. With decades of combined experience, our team of certified auditors and consultants
                            delivers impeccable accuracy and actionable insights.</p>
                        <p>We don't just find numbers; we unlock value. From regulatory compliance to strategic risk
                            advisory, we are your partners in sustainable growth.</p>
                        <div className="stats">
                            <div className="stat-item">
                                <h3>27+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <h3>10000+</h3>
                                <p>Audits Completed</p>
                            </div>
                            <div className="stat-item">
                                <h3>100%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
