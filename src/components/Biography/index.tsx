import React from 'react';
import './Biography.scss';
const dys = require('../../images/dysphemic2020.jpeg');
const dysLive = require('../../images/dys_live.jpg');

import Fade from 'react-reveal/Fade';

const biography: React.SFC = () => {
  return (
    <Fade>
      <div className="biography">
        <div>
          <img className="biography__image" src={dys} alt="dysphemic" />
          <img
            className="biography__image mobileHidden"
            src={dysLive}
            alt="dysphemic_live"
          />
        </div>
        <div className="biography__text">
          <p>
            Dysphemic appears to know no boundaries when it comes to genre or
            tempo. A single track could be defined as Dubstep, House, Drum and
            Bass, but no matter the style, the sound is always bass heavy, epic,
            melodic & cinematic. The fusion of traditional instruments and
            futuristic sound design pushes the limit of what we know electronic
            music to be to create an unforgettable journey for the listener.
          </p>
          <p>
            From being credited by Vice Magazine for pioneering classical
            Dubstep to having his album Zeus listed as one one of the most
            overlooked albums of 2017 by Reddit, Dysphemic has continued to
            expand the minds of listeners around the globe with his unique take
            on dance music. His track ‘Snake King’ was used by Go Pro and
            broadcast to millions of viewers during the 2019 Tour de France.
          </p>
          <p>
            His latest release, ‘Faerytale’ is an electro house track with long
            time collaborator and brother Yiani Treweeke who plays piano and
            guitar on the single. It again shows off the producer’s versatility
            and ability to experiment while keeping it true to his unique style.
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default biography;
