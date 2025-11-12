import React from 'react';
import './Services.css';

const servicesData = [
    { img: './images/Tech/frontend.png', name: 'Frontend Development' },
    { img: './images/Tech/performance.png', name: 'Performance Optimization' },
    { img: './images/Tech/api-integration.png', name: 'API Integration' },
    { img: './images/Tech/code-review.png', name: 'Code Review & Maintenance' },
];

const Services = () => {
    return (
        <section className="servicesSection">
            <div className="serviceHeader">
                <h1>Here’s what I can do for you 🚀</h1>
                <p>I help turn your ideas into fast, scalable, and user-friendly web experiences.</p>
            </div>

            <div className="serviceContainer">
                {servicesData.map((service, index) => (
                    <div className="serviceCard" key={index}>
                        <div className="serviceImageWrapper">
                            <img src={service.img} alt={service.name} />
                        </div>
                        <button className="serviceButton">{service.name}</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
