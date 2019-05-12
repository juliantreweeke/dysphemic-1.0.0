import './SubscribeForm.scss';

import React from 'react';

const subscribeForm: React.SFC = () => {
  return (
    <div className="subscribe-form">
      <h3>Subscribe to Dysphemic</h3>
      <div className="subheading-container">
        <p>C'mon slotho. Be the first to get sent free tunes.</p>
      </div>
      <form
        action="/subscribed/"
        method="post"
        name="subscribe"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="subscribe" />
        <div className="subscribe-form__field-group">
          <div className="subscribe-form__field">
            <label htmlFor="name">Name:</label>
            <input placeholder="yo name..." type="text" name="name" id="name" />
            <span className="bottom" />
            <span className="right" />
            <span className="top" />
            <span className="left" />
          </div>
          <div className="subscribe-form__field">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="yo emailz..."
              type="text"
              name="email"
              id="email"
            />
            <span className="bottom" />
            <span className="right" />
            <span className="top" />
            <span className="left" />
          </div>
        </div>
        <input
          type="submit"
          value="Subscribe"
          className="subscribe-form__submit"
        />
      </form>
    </div>
  );
};

export default subscribeForm;
