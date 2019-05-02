import React from 'react';
import './IconLinks.scss';
import Twitter from '../../../svgs/twitter.svg';
import Facebook from '../../../svgs/facebook.svg';
import Instagram from '../../../svgs/instagram.svg';
import Soundcloud from '../../../svgs/soundcloud.svg';
import Spotify from '../../../svgs/spotify.svg';
import Youtube from '../../../svgs/youtube.svg';
import Bandcamp from '../../../svgs/bandcamp.svg';
import ITunes from '../../../svgs/iTunes.svg';

interface IconLinksProps {
  colour?: string;
  height?: number;
}

const iconLinks: React.SFC<IconLinksProps> = ({ colour, height }) => {
  return (
    <ul className="iconLinks">
      <li>
        <a target="_blank" href="https://www.facebook.com/Dysphemicmusic/">
          <Facebook height={height} fill={colour} />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/dysphemic1/">
          <Instagram height={height} fill={colour} />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com/dysphemic">
          <Twitter height={height} fill={colour} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://open.spotify.com/artist/4lw0QYSR9txxIDgpTdeitX"
        >
          <Spotify height={height} fill={colour} />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://soundcloud.com/dysphemic0">
          <Soundcloud height={height} fill={colour} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCCXBlXT3PN2yH2TP3phVHIA"
        >
          <Youtube height={height} fill={colour} />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://dysphemic.bandcamp.com/">
          <Bandcamp height={height} fill={colour} />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://itunes.apple.com/us/artist/dysphemic/262642513"
        >
          <ITunes height={height} fill={colour} />
        </a>
      </li>
    </ul>
  );
};

export default iconLinks;
