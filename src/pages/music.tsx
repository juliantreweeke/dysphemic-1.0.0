import React from 'react';
import Layout from '../layout';
import AlbumList from '../components/AlbumList';
import SubscribeForm from '../components/SubscribeForm';
import { musicList } from '../musicList';

class Music extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>Music</h1>
        <AlbumList data={musicList} />
        <SubscribeForm />
      </Layout>
    );
  }
}

export default Music;
