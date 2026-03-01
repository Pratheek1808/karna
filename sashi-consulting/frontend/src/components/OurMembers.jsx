import React from 'react';

const OurMembers = () => {
    return (
        <section id="our-members" className="section founders">
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <h2 className="section-title">Our <span className="gold-text">Members</span></h2>
                    <p>Meet the dedicated professionals who make it all happen.</p>
                </div>
                <div className="founders-grid">
                    {/* Member 1 */}
                    <div className="founder-card fade-in-up delay-100">
                        <div className="founder-img-wrapper">
                            <div className="founder-placeholder"></div>
                        </div>
                        <h3>Member Name 1</h3>
                        <span className="founder-role">Role / Position</span>
                        <p>Short description or bio about the team member highlighting their expertise.</p>
                    </div>
                    {/* Member 2 */}
                    <div className="founder-card fade-in-up delay-200">
                        <div className="founder-img-wrapper">
                            <div className="founder-placeholder"></div>
                        </div>
                        <h3>Member Name 2</h3>
                        <span className="founder-role">Role / Position</span>
                        <p>Short description or bio about the team member highlighting their expertise.</p>
                    </div>
                    {/* Member 3 */}
                    <div className="founder-card fade-in-up delay-300">
                        <div className="founder-img-wrapper">
                            <div className="founder-placeholder"></div>
                        </div>
                        <h3>Member Name 3</h3>
                        <span className="founder-role">Role / Position</span>
                        <p>Short description or bio about the team member highlighting their expertise.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMembers;
