import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-description">
        If you have any questions or inquiries, feel free to reach out:
      </p>
      <p className="contact-description">Phone no.:</p>
      <ul className="contact-info">
        <li>
          <strong>Pranav Kumar Jangam:</strong> 
        </li>
        <li>
          <strong>Voore Risheel Kumar:</strong> 
        </li>
        <li>
          <strong>Akshaya:</strong> +91 70327 96574
        </li>
        <li>
          <strong>Bheemireddy Charan Sai Reddy:</strong>
        </li>
        <li>
          <strong>Bannuru Charan Reddy:</strong> 
        </li>
        <li>
          <strong>Mohammad Nida Madeeha:</strong> 
        </li>
        <li>
          <strong>Kolipyaka Vyshnavi:</strong> 
        </li>
      </ul>
    </div>
  );
}

export default Contact;
