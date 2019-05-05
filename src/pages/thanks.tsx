import React from 'react';
import Layout from '../layout';

class Thanks extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <div style={{ minHeight: '50vh' }}>
          <h1>Thanks!</h1>
          <p style={{ textAlign: 'center' }}>
            Thanks for reaching out, some one will contact you shortly.
          </p>
        </div>
      </Layout>
    );
  }
}

export default Thanks;
