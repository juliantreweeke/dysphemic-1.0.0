import React from 'react';
import './AlbumList.scss';
import Album from './Album';

interface IAlbum {
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

interface IAlbumListProps {
  data: [];
}

interface ISortByYear {
  year: string;
}

function sortByYear(a: ISortByYear, b: ISortByYear) {
  if (a.year < b.year) {
    return 1;
  }
  if (a.year > b.year) {
    return -1;
  }
  return 0;
}

class AlbumList extends React.PureComponent<IAlbumListProps, {}> {
  public render() {
    const { data } = this.props;
    const sortedData = data.sort(sortByYear);
    return (
      <ul className="album-list">
        {sortedData.map((album: IAlbum) => (
          <Album key={album.id} data={album} />
        ))}
      </ul>
    );
  }
}

export default AlbumList;
