import React from 'react';
import './StreamList.scss';
const soundcloud = require('../../images/soundcloud.png');
const spotify = require('../../images/spotify.png');
const appleMusic = require('../../images/apple.png');
const bandcamp = require('../../images/bandcamp.png');
const iTunes = require('../../images/iTunes.png');
const youtube = require('../../images/youtube.png');
const beatport = require('../../images/beatport.png');

const linkData = [
  { id: 'bandcamp', image: bandcamp, text: 'DOWNLOAD' },
  { id: 'spotify', image: spotify, text: 'PLAY' },
  { id: 'soundcloud', image: soundcloud, text: 'PLAY' },
  { id: 'spotify', image: spotify, text: 'PLAY' },
  { id: 'youtube', image: youtube, text: 'PLAY' },
  { id: 'appleMusic', image: appleMusic, text: 'PLAY' },
  { id: 'iTunes', image: iTunes, text: 'BUY' },
  { id: 'beatport', image: beatport, text: 'BUY' },
];

interface LinksProps {
  data: any;
}

const links: React.SFC<LinksProps> = ({ data }) => {
  return (
    <>
      <ul className="streamList__link__container">
        {Object.keys(data).map(key => {
          const link = linkData.find(x => x.id === key);
          const url = data[key];
          if (link) {
            return (
              <a
                className="streamList__link"
                key={link.id}
                href={url}
                target="_blank"
              >
                <li>
                  <img className="streamList__logo" src={link.image} />
                  <p>{link.text}</p>
                </li>
              </a>
            );
          }
        })}
      </ul>
    </>
  );
};

export default links;
