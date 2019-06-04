import React from 'react';
import News from '../components/News';
import SubscribeForm from '../components/SubscribeForm';
import Layout from '../layout';
import './indexPage.scss';
import LogRocket from 'logrocket';
LogRocket.init('h7ywe4/dysphemic');

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <News />
        <SubscribeForm />
      </Layout>
    );
  }
}

export default IndexPage;
