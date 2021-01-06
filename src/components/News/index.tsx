import React from 'react';
import { Link } from 'gatsby';
import Video from '../Video/';
import Fade from 'react-reveal/Fade';
import './News.scss';

const apolloImage = require('../../images/covers/TransdimensionalOctagon.jpg');

const news: React.SFC = () => {
  return (
    <Fade>
      <Video id="OPcXvgsVS_s" autoplay={true} mute={true} />
      <div className="news">
        <section className="news__section">
          <div className="news__section__content">
            <img className="news__section__image" src={apolloImage} />
            <div className="news__section__text">
              <h1>Transdimensional Octagon - Dropping soon</h1>
              <div className="download-link-container">
                <Link
                  className="download-link"
                  to="/stream/transdimensional-octagon"
                >
                  Presave/Pre-order
                </Link>
                <div className="download-link-description">
                  <p>
                    The soundtrack to a future where humans worship an Octagon
                    shaped spaceship.
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
