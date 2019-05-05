import React from 'react';
import './ContactForm.scss';
import { Link } from 'gatsby';

const contactForm: React.SFC = () => {
  return (
    <div className="contact-form">
      <form
        method="post"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact-form__field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" />
        </div>
        <Link to="/thanks/">
          <input
            type="submit"
            value="Send Message"
            className="contact-form__submit"
          />
        </Link>
      </form>
    </div>
  );
};

export default contactForm;
