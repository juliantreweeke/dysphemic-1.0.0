import React from 'react';
import Layout from '../layout';
import ContactForm from '../components/ContactForm';

class Contact extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>Contact</h1>
        <ContactForm />
      </Layout>
    );
  }
}

export default Contact;
