import React from 'react';
import News from '../components/News';
import Patreon from '../components/Patreon';
import Layout from '../layout';
import './indexPage.scss';
import LogRocket from 'logrocket';
LogRocket.init('h7ywe4/dysphemic');

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <News />
        <Patreon />
      </Layout>
    );
  }
}

export default IndexPage;
