import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import './News.scss';

const comingSoon = require('../../images/covers/mindbanditblur.jpg');

const news: React.SFC = () => {
  return (
    <Fade>
      <div className="news">
        <section className="news__section">
          <div className="news__section__content">
            <img className="news__section__image" src={comingSoon} />
            <div className="news__section__text">
              <h2>New Album Apollo is incoming</h2>
              <div className="download-link-container">
                {/* <Link className="download-link" to="/stream/mindbandit">
                FREE DOWNLOAD/SPOTIFY
              </Link> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default news;
