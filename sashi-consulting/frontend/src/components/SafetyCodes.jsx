import React from 'react';

const SafetyCodes = () => {
    return (
        <section id="safety-security-codes" className="section safety-security-codes"
            style={{ backgroundColor: 'var(--secondary-color)' }}>
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <h2 className="section-title">Safety & <span className="gold-text">Security Codes</span></h2>
                    <p>Prioritizing workforce safety and industrial security compliance.</p>
                </div>

                <div className="services-grid">
                    {/* 1. Wages */}
                    <div className="service-card fade-in-up">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20M2 12h20" />
                            </svg>
                        </div>
                        <h3>The Code on Wages, 2019</h3>
                        <p>Ensuring timely wages and standardized remuneration structures.</p>
                    </div>

                    {/* 2. Social Security */}
                    <div className="service-card fade-in-up delay-100">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>The Social Security Code, 2020</h3>
                        <p>Extending social security benefits to all employees and workers.</p>
                    </div>

                    {/* 3. Occupational Safety */}
                    <div className="service-card fade-in-up delay-200">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h3>The Code on Occupational Safety, Health and Working Conditions, 2020</h3>
                        <p>Regulating health, safety, and working conditions in establishments.</p>
                    </div>

                    {/* 4. Industrial Safety */}
                    <div className="service-card fade-in-up delay-300">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <h3>The Industrial Safety and Security Code, 2020</h3>
                        <p>Implementing robust industrial safety and security protocols.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetyCodes;
