import React from 'react';
import Layout from '../layout';
import Biography from '../components/Biography';

class About extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>About</h1>
        <Biography />
      </Layout>
    );
  }
}

export default About;
