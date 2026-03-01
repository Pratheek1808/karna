import React from 'react';

const Founders = () => {
    return (
        <section id="founders" className="section founders">
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <h2 className="section-title">Meet Our <span className="gold-text">Leadership</span></h2>
                    <p>Visionary leadership driving excellence and integrity.</p>
                </div>
                <div className="founders-grid">
                    {/* Founder 1 */}
                    <div className="founder-card fade-in-up delay-100">
                        <div className="founder-img-wrapper">
                            <div className="founder-placeholder"></div>
                        </div>
                        <h3>Shashikala</h3>
                        <span className="founder-role">Founder & CEO</span>
                        <p>With over 20 years of experience in auditing and financial consulting, Shashi leads with a vision
                            of uncompromised quality and client trust.</p>
                    </div>
                    {/* Founder 2 */}
                    <div className="founder-card fade-in-up delay-200">
                        <div className="founder-img-wrapper">
                            <img
                                src="/images/lakshmi-prasana.png"
                                alt="Lakshmi Prasana"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <h3>Lakshmi Prasana</h3>
                        <span className="founder-role">Co-Founder & Managing Partner</span>
                        <p>An expert in tax strategy and risk advisory, Anitha ensures that every client receives tailored
                            financial solutions for sustainable growth.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founders;
