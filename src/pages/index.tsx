import React from 'react';
import News from '../components/News';
import SubscribeFormIFrame from '../components/SubscribeFormIFrame';
import Layout from '../layout';
import './indexPage.scss';
import LogRocket from 'logrocket';
LogRocket.init('h7ywe4/dysphemic');

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <News />
        <SubscribeFormIFrame />
      </Layout>
    );
  }
}

export default IndexPage;
