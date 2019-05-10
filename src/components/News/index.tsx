import React from 'react';
import { Link } from 'gatsby';
import Video from '../../components/Video';
import './News.scss';

const mindBandit = require('../../images/covers/mindbanditblur.jpg');

interface NewsProps {}

const news: React.SFC<NewsProps> = () => {
  return (
    <div className="news">
      <section className="news__section">
        <div className="news__section__content">
          <img className="news__section__image" src={mindBandit} />
          <div className="news__section__text">
            <h2>Mind Bandit is coming!</h2>
            <p>
              Hell yeah! My new EP Mind Bandit is coming very very soon. Psyched
              about this one. Release date TBC
            </p>
          </div>
        </div>
      </section>
      <section className="news__section">
        <div className="news__section__content">
          <iframe
            className="video"
            src={'https://www.youtube.com/embed/-pPuhePku9A?autoplay=0'}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          />
          <div className="news__section__text">
            <h2>Zeus</h2>
            <p>
              While you patiently wait for Mind Bandit, why don't you check my
              last album Zeus. He is a friendly one.
            </p>
            <p>It's up for free download and available to stream everywhere</p>
            <div className="download-link-container">
              <Link className="download-link" to="/stream/zeus">
                TAKE ME TO ZEUS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default news;
