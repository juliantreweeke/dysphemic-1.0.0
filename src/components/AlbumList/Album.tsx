import React from 'react';
import { Link } from 'gatsby';
import './AlbumList.scss';

interface AlbumProps {
  data: any;
}

const album: React.SFC<AlbumProps> = ({ data }) => {
  return (
    <li className="album">
      <div className="album__info">
        <span className="album__title">{data.title}</span>
        <span className="album__year">{data.year}</span>
      </div>
      <img src={data.image} alt={data.title} />
    </li>
  );
};

export default album;
