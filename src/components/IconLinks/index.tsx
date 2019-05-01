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
        <Facebook height={height} fill={colour} />
      </li>
      <li>
        <Instagram height={height} fill={colour} />
      </li>
      <li>
        <Twitter height={height} fill={colour} />
      </li>
      <li>
        <Spotify height={height} fill={colour} />
      </li>
      <li>
        <Soundcloud height={height} fill={colour} />
      </li>
      <li>
        <Youtube height={height} fill={colour} />
      </li>
      <li>
        <Bandcamp height={height} fill={colour} />
      </li>
      <li>
        <ITunes height={height} fill={colour} />
      </li>
    </ul>
  );
};

export default iconLinks;
