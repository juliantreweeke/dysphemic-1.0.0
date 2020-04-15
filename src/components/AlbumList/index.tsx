import React from 'react';
import './AlbumList.scss';
import Album from './Album';

interface Album {
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
      <ul className="album-list">
        {sortedData.map((album: Album) => (
          <Album key={album.id} data={album} />
        ))}
      </ul>
    );
  }
}

export default AlbumList;
