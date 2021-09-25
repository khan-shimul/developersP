import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="container">
                    <h2 className="hero-title"><span className="thin-text">Hire the</span> <span>Best <span className="thin-text">Freelance</span> Developers</span><br /> in the World</h2>
                    <p>World Devs is a marketplace for top engineers, programmers, coders. Top companies and start-ups choose World-Devs freelancers for their mission-critical software projects.</p>
                    <button className="total-budget btn-regular mb-4">Total Budget: $100 Million</button>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;