import React from 'react';
import Layout from '../layout';
import AlbumList from '../components/AlbumList';
import SubscribeFormIFrame from '../components/SubscribeFormIFrame';
import { musicList } from '../musicList';

class Music extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>Music</h1>
        <AlbumList data={musicList} />
        <SubscribeFormIFrame />
      </Layout>
    );
  }
}

export default Music;
