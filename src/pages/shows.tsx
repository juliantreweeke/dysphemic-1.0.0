import React from 'react';
import Layout from '../layout';
import ShowList from '../components/ShowList';

class Shows extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>Shows</h1>
        <h2>USA & MEXICO TOUR 2019</h2>
        <ShowList />
      </Layout>
    );
  }
}

export default Shows;
