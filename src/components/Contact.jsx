import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h3 className="contact-subtitle">Contact Me</h3>
      <h2 className="contact-title">GET IN TOUCH</h2>

      <div className="contact-cards">
        <div className="contact-card">
          <i className="fas fa-phone-alt icon"></i>
          <h4>Phone</h4>
          <p>+91-7780354707</p>
        </div>
        <div className="contact-card">
          <i className="fas fa-envelope icon"></i>
          <h4>Email</h4>
          <p>mallu.taruni@gmail.com</p>
        </div>
        <div className="contact-card">
          <i className="fas fa-map-marker-alt icon"></i>
          <h4>Address</h4>
          <p>Hyderabad, Telangana, India</p>
        </div>
      </div>

      <form className="contact-form"
  action="https://formspree.io/f/xovvezge"
  method="POST"
>
  <div className="form-columns">
    <div className="form-left">
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="subject" placeholder="Subject" />
    </div>
    <div className="form-right">
      <textarea name="message" placeholder="Message" required></textarea>
    </div>
  </div>

  <div className="submit-btn-wrapper">
    <button type="submit" className="send-btn">Send Message</button>
  </div>
</form>

    </section>
  );
};

export default Contact;
