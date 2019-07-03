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
            <Link to="/stream/mindbandit">
              <h2>FREE DOWNLOAD/SPOTIFY</h2>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default news;
