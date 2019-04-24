import React from 'react';
import { Link } from 'gatsby';
import './AlbumList.scss';

interface AlbumProps {
  data: any;
}

const album: React.SFC<AlbumProps> = ({ data }) => {
  return (
    <li className="album">
      <img src={data.image} alt={data.title} />
    </li>
  );
};

export default album;
