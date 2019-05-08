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
        <h2>Mind Bandit is coming!</h2>
        <p>
          Hell yeah! My new EP Mind Bandit is coming very very soon. Psyched
          about this one. Release date TBC
        </p>
        <img src={mindBandit} />
      </section>
      <section className="news__section">
        <h2>Zeus</h2>
        <p>
          While you patiently wait for Mind Bandit, why don't you check my last
          album Zeus. He is a friendly one.
        </p>
        <p>It's up for free download and available to stream everywhere</p>
        <div className="download-link-container">
          <Link className="download-link" to="/stream/zeus">
            TAKE ME TO ZEUS
          </Link>
        </div>
        <p>
          (For the sloth like, the album in full can also be streamed below)
        </p>
        <Video id="-pPuhePku9A" autoplay={false} />
      </section>
    </div>
  );
};

export default news;
