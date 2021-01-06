import React from 'react';
import './ContactForm.scss';
import Fade from 'react-reveal/Fade';

const contactForm: React.SFC = () => {
  return (
    <Fade>
      <div className="contact-form">
        <form
          action="/thanks/"
          method="post"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact-form__field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" data-cy="name" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" data-cy="email" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={6} data-cy="message" />
          </div>
          <input
            data-cy="submit"
            type="submit"
            value="Send Message"
            className="contact-form__submit"
          />
        </form>
      </div>
    </Fade>
  );
};

export default contactForm;
