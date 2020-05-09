import React from 'react';
import Patreon from '../components/Patreon';
import Layout from '../layout';
import './Subscribed.scss';

class Subscribed extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <div className="subscribed">
          <h1 className="subscribed__heading">Thank you for Subscribing!</h1>
          <p className="subscribed__text">
            Your are now on the list to get sent free tunes.
          </p>
          <Patreon />
        </div>
      </Layout>
    );
  }
}

export default Subscribed;
