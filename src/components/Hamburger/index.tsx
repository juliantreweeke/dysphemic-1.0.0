import React from 'react';
import './Hamburger.scss';

interface HamburgerProps {
  open?: boolean;
  toggleOpen?: any;
}

const hamburger: React.SFC<HamburgerProps> = ({ open, toggleOpen }) => {
  return (
    <div onClick={toggleOpen} className={`hamburger ${open ? 'open' : ''}`}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default hamburger;
