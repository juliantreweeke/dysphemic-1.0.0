import React from 'react';
import { Link } from 'gatsby';
import './AlbumList.scss';

interface AlbumProps {
  data: any;
}

const album: React.SFC<AlbumProps> = ({ data }) => {
  return (
    <li className="album">
      <Link to="/stream/" state={{ data }}>
        <div className="album__info">
          <span className="album__title">{data.title}</span>
          <span className="album__year">{data.year}</span>
        </div>
        <img src={data.image} alt={data.title} />
      </Link>
    </li>
  );
};

export default album;
