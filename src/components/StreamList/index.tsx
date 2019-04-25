import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../layout';
import './StreamList.scss';
import { musicList } from '../../musicList';

interface StreamListProps {
  pageContext: any;
}

const streamList: React.SFC<StreamListProps> = ({
  pageContext: { albumRoute },
}) => {
  console.log(albumRoute);
  const data = musicList.find(album => album.id === albumRoute.id);
  console.log(data);
  return (
    <Layout>
      <div className="streamList">
        <h1>{data.title}</h1>
        <img src={data.image} />
        <a href={data.downloadLink} target="_blank">
          stream
        </a>
        <Link to="/music/">Back</Link>
      </div>
    </Layout>
  );
};

export default streamList;
