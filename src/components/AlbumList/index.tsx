import React from 'react';
import './AlbumList.scss';
import Album from './Album';
import Fade from 'react-reveal/Fade';

interface Album {
  id: string;
  title: string;
  year: number;
  image: any;
  type?: string;
  links: {
    bandcamp?: string;
    spotify?: string;
    iTunes?: string;
    youtube?: string;
    appleMusic?: string;
  };
}

interface AlbumListProps {
  data: [];
}

interface SortByYear {
  year: string;
}

function sortByYear(a: SortByYear, b: SortByYear) {
  if (a.year < b.year) {
    return 1;
  }
  if (a.year > b.year) {
    return -1;
  }
  return 0;
}

class AlbumList extends React.PureComponent<AlbumListProps, {}> {
  public render() {
    const { data } = this.props;
    const sortedData = data.sort(sortByYear);
    return (
      <Fade>
        <ul className="album-list">
          {sortedData.map((album: Album) => {
            if (album.type) {
              return <Album key={album.id} data={album} />;
            }
          })}
        </ul>
      </Fade>
    );
  }
}

export default AlbumList;
