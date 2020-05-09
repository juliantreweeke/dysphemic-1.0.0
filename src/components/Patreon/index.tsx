import React from 'react';
import Button from '../Button/';
import './Patreon.scss';

const patreon: React.SFC = () => {
  return (
    <div className="patreon">
      <h2 className="patreon__heading">Support me and join my Patreon</h2>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={'https://www.patreon.com/bePatron?u=35103018'}
      >
        <Button text={'BECOME A PATRON'} />
      </a>
      <p className="patreon__description">
        Join the exclusive Dysphemic clan group, get music mentoring, first
        access to new releases and merch, free tickets and more.
      </p>
    </div>
  );
};

export default patreon;
