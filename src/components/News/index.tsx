import React from 'react';
import { Link } from 'gatsby';

import Fade from 'react-reveal/Fade';
import './News.scss';

const newsImage = require('../../images/covers/Faerytale.jpg');

const news: React.SFC = () => {
  return (
    <Fade>
      <div className="news">
        <section className="news__section">
          <div className="news__section__content">
            <img className="news__section__image" src={newsImage} />
            <div className="news__section__text">
              <h1>New single Faerytale out now</h1>
              <div className="download-link-container">
                <Link className="download-link" to="/stream/faerytale">
                  Listen here
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="news__section">
          <div className="news__section__content">
            <div className="news__section__text">
              <h2>Earth Frequency festival set</h2>
              <div className="download-link-description">
                <p>
                  My set from Earth Frequency Festival! Closing the Atrium
                  stage. 1.5hrs of all original tunes, glitch hop/dubstep/bass
                  house/drum and bass.
                </p>
              </div>
              <iframe
                width={'100%'}
                height={166}
                scrolling={'no'}
                allow={'autoplay'}
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1051376683&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default news;
