import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';
import './indexPage.scss';

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>News</h1>
        <p>Mind Bandit is coming</p>
      </Layout>
    );
  }
}

export default IndexPage;
