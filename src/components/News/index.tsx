import React from 'react';
import { Link } from 'gatsby';
import Video from '../Video/';
import Fade from 'react-reveal/Fade';
import './News.scss';

const newsImage = require('../../images/covers/fire-breather-emergence.jpeg');

const news: React.SFC = () => {
  return (
    <Fade>
      <Video id="OPcXvgsVS_s" autoplay={true} mute={true} />
      <div className="news">
        <section className="news__section">
          <div className="news__section__content">
            <img className="news__section__image" src={newsImage} />
            <div className="news__section__text">
              <h1>Fire breather</h1>
              <div className="download-link-container">
                <Link className="download-link" to="/stream/fire-breather">
                  Stream Here
                </Link>
                <div className="download-link-description">
                  <p>
                    From the Emergence compilation Curated by Clozee and
                    released by Gravitas Recordings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default news;
