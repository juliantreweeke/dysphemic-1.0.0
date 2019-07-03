import React from 'react';
import { Link } from 'gatsby';
import Video from '../../components/Video';
import './News.scss';

const mindBandit = require('../../images/covers/mindbandit.jpg');

interface NewsProps {}

const news: React.SFC<NewsProps> = () => {
  return (
    <div className="news">
      <section className="news__section">
        <div className="news__section__content">
          <img className="news__section__image" src={mindBandit} />
          <div className="news__section__text">
            <h2>Mind Bandit is out!</h2>
            <p>Get ready for your mind to be stolen!</p>
            <div className="download-link-container">
              <Link className="download-link" to="/stream/mindbandit">
                FREE DOWNLOAD/SPOTIFY
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default news;
