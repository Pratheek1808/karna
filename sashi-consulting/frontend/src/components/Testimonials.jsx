import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials" style={{ backgroundColor: 'var(--primary-color)' }}>
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <h2 className="section-title">Client <span className="gold-text">Testimonials</span></h2>
                    <p>What our partners say about working with Shashi Consulting Services.</p>
                </div>

                <div className="testimonials-grid">
                    {/* Testimonial 1 */}
                    <div className="testimonial-card fade-in-up">
                        <div className="quote-icon">❝</div>
                        <p className="testimonial-text">Shashi Consulting Services has been pivotal in streamlining our
                            financial audits. Their attention to detail and regulatory knowledge is unmatched.</p>
                        <div className="testimonial-author">
                            <h4>Rajesh Kumar</h4>
                            <span>CFO, TechSolutions India</span>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="testimonial-card fade-in-up delay-100">
                        <div className="quote-icon">❝</div>
                        <p className="testimonial-text">The team provided excellent support during our factory
                            registration process. Minimal hassle and professional guidance throughout.</p>
                        <div className="testimonial-author">
                            <h4>Anita Desai</h4>
                            <span>HR Director, Manufacturing Corp</span>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="testimonial-card fade-in-up delay-200">
                        <div className="quote-icon">❝</div>
                        <p className="testimonial-text">Their insights into the new labour codes helped us prepare well
                            in advance. A truly strategic partner for our business.</p>
                        <div className="testimonial-author">
                            <h4>Vikram Singh</h4>
                            <span>CEO, Global Ventures</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
