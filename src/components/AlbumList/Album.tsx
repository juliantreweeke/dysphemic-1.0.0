import React from 'react';
import { Link } from 'gatsby';
import './AlbumList.scss';

interface AlbumProps {
  data: {
    id: string;
    title: string;
    year: number;
    image: any;
    type: string;
    links: {
      bandcamp?: string;
      spotify?: string;
      iTunes?: string;
      youtube?: string;
      appleMusic?: string;
    };
  };
}

const album: React.SFC<AlbumProps> = ({ data }) => {
  return (
    <li className="album">
      <Link to={`/stream/${data.id}`}>
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
