import React from 'react';
import './Video.scss';

interface VideoProps {
  id: string;
  autoplay?: boolean;
  mute?: boolean;
}

const video: React.SFC<VideoProps> = ({ autoplay, id, mute }) => {
  return (
    <div className="video__container">
      <iframe
        autoPlay={autoplay}
        className="video"
        src={`https://www.youtube.com/embed/${id}?autoplay=${autoplay}&mute=${mute}`}
        frameBorder={0}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      />
    </div>
  );
};

export default video;
