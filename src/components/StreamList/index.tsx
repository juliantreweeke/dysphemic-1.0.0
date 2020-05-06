import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../layout';
import './StreamList.scss';
import { musicList } from '../../musicList';
import Links from './Links';

interface StreamListProps {
  pageContext: {
    albumRoute: { id: string };
  };
}

const streamList: React.SFC<StreamListProps> = ({
  pageContext: { albumRoute },
}) => {
  const data = musicList.find(album => album.id === albumRoute.id);
  return (
    <Layout>
      <h1 className="streamList__header">
        {data.title} - {data.type}
      </h1>
      <div className="streamList">
        <img className="streamList__cover" src={data.image} />
        <Links data={data.links} />
      </div>
    </Layout>
  );
};

export default streamList;
