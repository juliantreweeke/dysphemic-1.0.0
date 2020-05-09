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
            If aliens were to visit cavemen and give them the gift of bass,
            Dysphemic would be the soundtrack.
          </p>
          <p>
            Dysphemic appears to know no boundaries when it comes to genre or
            tempo. A single track could be defined as Dubstep, House, Drum and
            Bass, even Middle Eastern Trap, but no matter the style, the sound
            is always bass heavy, epic, melodic & cinematic.
          </p>
          <p>
            From being credited by Vice Magazine for pioneering classical
            Dubstep to having his album Zeus listed as one one of the most
            overlooked albums of 2017 by Reddit, Dysphemic has continued to
            expand the minds of listeners around the globe with his unique take
            on dance music. His track ‘Snake King’ was recently used by Go Pro
            and broadcast to millions of viewers during the 2019 Tour de France.
          </p>
          <p>
            The newest release, ‘Apollo’ is a hybrid of mediterranean guitar
            styles, gothic keyboards and arabic world bass created with longtime
            collaborator, Yiani Treweeke on keys and guitar.
          </p>
          <p>
            This release sees the two brothers find influence from their
            families Egyptian Greek roots and their psychedelic upbringing in
            the Australian Blue Mountains to create a soundtrack of an ancient
            future. From the tribal drum and bass vibes of Desert Hawk, to the
            spacey House wobbles of Lost Brothers, Apollo will enlist your
            psyche on a mission through the ancient terrains of the cosmos.
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default biography;
