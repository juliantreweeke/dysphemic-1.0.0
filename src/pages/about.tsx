import React from 'react';
import Layout from '../layout';
import Biography from '../components/Biography';
import SubscribeFormIFrame from '../components/SubscribeFormIFrame';

class About extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <Biography />
        <SubscribeFormIFrame />
      </Layout>
    );
  }
}

export default About;
