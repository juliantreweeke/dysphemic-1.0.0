import React from 'react';
import './Biography.scss';
const dys = require('../../images/dys.jpg');

const biography: React.SFC = () => {
  return (
    <>
      <div className="biography">
        <img className="biography__image" src={dys} alt="dysphemic" />
        <div className="biography__text">
          <p>
            Producer and rapper, Dysphemic, son of Vernon Treweeke the "Father
            of Australian Psychedelic Art", started experimenting with music on
            a Commodore Amiga 500 and playing drums when he was still in primary
            school.
          </p>

          <p>
            His unrelenting work ethic produced a number of acclaimed releases
            over his 10 year career traversing jungle, breakcore, hip hop, drum
            and bass, dubstep and glitch hop. Releases such as 'Sloth',
            'Androids', 'Hypnosis' and 'Muthaf#ckn Dinosaur!' received worldwide
            attention from music critics and raver kids alike.{' '}
          </p>
          <p>
            Credited by Vice magazine for pioneering classical Dubstep and
            touring the four corners of the globe to sold out venues and
            critical acclaim cemented his name in music history forever.
          </p>
          <p>
            For the past three years Dysphemic has been drawing crowds across
            the Northern and Southern Hemisphere festival circuit with a new
            signature sound mixing Greek and Middle Eastern world music with
            bass heavy EDM- a one man party sound system.
          </p>
        </div>
      </div>
      <div className="biography-video-container">
        <iframe
          autoplay="true"
          className="biography-video"
          src="https://www.youtube.com/embed/OPcXvgsVS_s"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        />
      </div>
    </>
  );
};

export default biography;
