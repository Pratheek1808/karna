import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container">
                <a href="#" className="logo">Shashi<span>Consulting Services</span></a>
                <div
                    className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    id="mobile-menu"
                    onClick={toggleMobileMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
                    <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
                    <li><a href="#contact" className="btn-nav" onClick={closeMobileMenu}>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
