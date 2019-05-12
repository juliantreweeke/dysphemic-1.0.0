import React from 'react';
import Layout from '../layout';
import Biography from '../components/Biography';
import SubscribeForm from '../components/SubscribeForm';

class About extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <Biography />
        <SubscribeForm />
      </Layout>
    );
  }
}

export default About;
