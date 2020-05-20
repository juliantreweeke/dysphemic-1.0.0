import React from 'react';
import { Link } from 'gatsby';
import Video from '../Video/';
import Fade from 'react-reveal/Fade';
import './News.scss';

const apolloImage = require('../../images/covers/apollo.jpg');

const news: React.SFC = () => {
  return (
    <Fade>
      <Video id="OPcXvgsVS_s" autoplay={true} mute={true} />
      <div className="news">
        <section className="news__section">
          <div className="news__section__content">
            <img className="news__section__image" src={apolloImage} />
            <div className="news__section__text">
              <h2>New album Apollo - Out Now</h2>
              <div className="download-link-container">
                <Link className="download-link" to="/stream/apollo">
                  Free Download/Stream
                </Link>
                <div className="download-link-description">
                  <p>
                    The newest release, ‘Apollo’ is a hybrid of mediterranean
                    guitar styles, gothic keyboards and arabic world bass
                    created with longtime collaborator, Yiani Treweeke on keys
                    and guitar.
                  </p>
                  <p>
                    This release sees the two brothers find influence from their
                    families Egyptian Greek roots and their psychedelic
                    upbringing in the Australian Blue Mountains to create a
                    soundtrack of an ancient future. From the tribal drum and
                    bass vibes of Desert Hawk, to the spacey House wobbles of
                    Lost Brothers, Apollo will enlist your psyche on a mission
                    through the ancient terrains of the cosmos.
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
