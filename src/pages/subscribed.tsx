import React from 'react';
import Layout from '../layout';

class Subscribed extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <div style={{ minHeight: '50vh' }}>
          <h1>Thanks for subscribing!</h1>
          <p style={{ textAlign: 'center' }}>
            Your now on the list to get free tunes.
          </p>
        </div>
      </Layout>
    );
  }
}

export default Subscribed;
