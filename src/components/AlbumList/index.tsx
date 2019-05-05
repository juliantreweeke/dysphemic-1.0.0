import React from 'react';
import './AlbumList.scss';
import Album from './Album';

interface AlbumListProps {
  data: [];
}

function sortByYear(a, b) {
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
        {sortedData.map(album => (
          <Album key={album.id} data={album} />
        ))}
      </ul>
    );
  }
}

export default AlbumList;
