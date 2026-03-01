import React from 'react';

const Services = () => {
    return (
        <section id="services" className="section services">
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <h2 className="section-title">Our Expertise</h2>
                    <p>Comprehensive solutions tailored to your unique financial landscape.</p>
                </div>

                <div className="services-grid">
                    {/* Service 1 */}
                    <div className="service-card fade-in-up">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        <h3>Financial Auditing</h3>
                        <p>Rigorous examination of financial records to ensure accuracy, compliance, and
                            transparency for stakeholders.</p>
                    </div>

                    {/* Service 5: Factory Registration */}
                    <div className="service-card fade-in-up">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                        </div>
                        <h3>Factory Registration</h3>
                        <p>Complete assistance with registration under the Factories Act, ensuring your
                            manufacturing unit complies with all safety and labor regulations.</p>
                    </div>

                    {/* Service 6: S&E Registration */}
                    <div className="service-card fade-in-up delay-100">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 21h18"></path>
                                <path d="M5 21V7l8-4 8 4v14"></path>
                                <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9z"></path>
                            </svg>
                        </div>
                        <h3>S&E Registration</h3>
                        <p>Hassle-free Shops & Establishments Act registration for your commercial entity, handling
                            all local municipal requirements.</p>
                    </div>

                    {/* Service 7: ESIC Registration */}
                    <div className="service-card fade-in-up delay-200">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="8.5" cy="7" r="4"></circle>
                                <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>
                        </div>
                        <h3>ESIC Registration</h3>
                        <p>Employees' State Insurance Corporation registration support to provide social security
                            and health insurance benefits to your workforce.</p>
                    </div>

                    {/* Service 8: EPFO Registration */}
                    <div className="service-card fade-in-up delay-300">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>EPFO Registration</h3>
                        <p>Employees' Provident Fund Organization registration services to secure your employees'
                            future and ensure statutory compliance.</p>
                    </div>

                    {/* Service 9: Payment of Gratuity Registration */}
                    <div className="service-card fade-in-up">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                        </div>
                        <h3>Payment of Gratuity</h3>
                        <p>Guidance on Gratuity Act registration and compliance, ensuring timely and correct
                            gratuity payments to your eligible employees.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
