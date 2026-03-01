import React from 'react';

const Clients = () => {
    return (
        <section id="clients" className="section clients">
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <h2 className="section-title">Trusted by <span className="gold-text">Industry Leaders</span></h2>
                    <p>Partnering with top organizations to drive financial excellence.</p>
                </div>

                <div className="clients-grid">
                    {/* Client 1: Tata */}
                    <div className="client-card fade-in-up">
                        <img src="/images/tata-logo.png" alt="Tata" className="client-img" />
                    </div>
                    {/* Client 2: Aditya Birla */}
                    <div className="client-card fade-in-up delay-100">
                        <img src="/images/aditya-birla-logo.png" alt="Aditya Birla" className="client-img" />
                    </div>
                    {/* Client 3: NDR */}
                    <div className="client-card fade-in-up delay-200">
                        <img src="/images/ndr-logo.png" alt="NDR" className="client-img" style={{ filter: 'grayscale(100%)' }} />
                    </div>
                    {/* Client 4: Skyroot */}
                    <div className="client-card fade-in-up delay-300">
                        <img src="/images/skyroot-logo.png" alt="Skyroot" className="client-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
