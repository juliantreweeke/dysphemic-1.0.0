import React from 'react';
import './AlbumList.scss';
import Album from './Album';

interface AlbumListProps {
  data: any;
}

class AlbumList extends React.PureComponent<AlbumListProps, {}> {
  public render() {
    const { data } = this.props;

    return (
      <ul className="album-list">
        {data.map(album => (
          <Album key={album.id} data={album} />
        ))}
      </ul>
    );
  }
}

export default AlbumList;
