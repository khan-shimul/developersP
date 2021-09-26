import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="container">
                    <h2 className="hero-title"><span className="thin-text">Hire the</span> <span>Best <span className="thin-text">Freelance</span> Developers</span><br /> in the World</h2>
                    <p className="short-about">World Devs is a marketplace for top engineers, programmers, coders. Top companies and start-ups choose World-Devs freelancers for their mission-critical software projects. You will be surprised about the quality of devs nd engineers And if your are looking for a freelance devs nd engineers then you're in the right place!</p>
                    <button className="total-budget mb-4">Total Budget: $100 Million</button>
                    <p className="no-risk"><small>No-Risk, Pay Only If Satisfied.</small></p>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;