import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';
import Pages from './pages.scss';
import AlbumList from '../components/AlbumList';
import { musicList } from '../musicList';

class StreamList extends React.PureComponent<{}, {}> {
  public render() {
    const { data } = this.props.location.state;
    return (
      <Layout>
        <h1>{data.title}</h1>
        <img src={data.image} />
        <a href={data.link} target="_blank">
          stream
        </a>
        <Link to="/music/">Back</Link>
      </Layout>
    );
  }
}

export default StreamList;
