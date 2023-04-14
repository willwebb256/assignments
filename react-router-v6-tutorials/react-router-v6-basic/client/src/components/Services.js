import React from 'react';

export default function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>
      <ul className="services-list">
        <li className="service">
          <h3 className="service-title">Plumbing</h3>
          <p className="service-description">We offer a wide range of plumbing services, including drain cleaning, pipe repair and replacement, and more.</p>
        </li>
        <li className="service">
          <h3 className="service-title">Electrical</h3>
          <p className="service-description">Our team of skilled electricians can handle any electrical job, from small repairs to complete rewiring projects.</p>
        </li>
        <li className="service">
          <h3 className="service-title">HVAC</h3>
          <p className="service-description">We provide comprehensive HVAC services, including installation, repair, and maintenance of all types of heating and cooling systems.</p>
        </li>
      </ul>
      <img className="services-image" src="https://images.unsplash.com/photo-1543674892-7d64d45df18b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80" alt="Services Page Banner"/>
    </section>
  );
}
