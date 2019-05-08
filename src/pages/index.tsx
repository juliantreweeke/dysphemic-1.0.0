import React from 'react';
import { Link } from 'gatsby';
import News from '../components/News';
import SubscribeForm from '../components/SubscribeForm';
import Layout from '../layout';
import './indexPage.scss';

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>News</h1>
        <News />
        <SubscribeForm />
      </Layout>
    );
  }
}

export default IndexPage;
