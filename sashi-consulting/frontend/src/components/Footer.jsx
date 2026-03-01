import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/images/logo.png" alt="Shashi Consulting Services" height="50" />
                        <p>&copy; 2024 Shashi Consulting Services. All rights reserved.</p>
                    </div>
                    <div className="footer-links">
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        {/* We might add a Link router if we have separate pages for these later, for now href is fine */}
                        <a href="/privacy-policy.html">Privacy Policy</a>
                        <a href="/terms-of-service.html">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
