import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../layout';
import './StreamList.scss';
import { musicList } from '../../musicList';
import Links from './Links';

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
      <h1 className="streamList__header">
        {data.title} - {data.type}
      </h1>
      <div className="streamList">
        <img className="streamList__cover" src={data.image} />
        <Links data={data.links} />
        <Link className="backLink" to="/music/">
          Back
        </Link>
      </div>
    </Layout>
  );
};

export default streamList;
