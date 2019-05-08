import React from 'react';
import './Video.scss';

interface VideoProps {
  id: string;
  autoplay?: boolean;
}

const video: React.SFC<VideoProps> = ({ id, autoplay }) => {
  return (
    <div className="video__container">
      <iframe
        autoplay={autoplay}
        className="video"
        src={`https://www.youtube.com/embed/${id}?autoplay=${autoplay}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      />
    </div>
  );
};

export default video;
