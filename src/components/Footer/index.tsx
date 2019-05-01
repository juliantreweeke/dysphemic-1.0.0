import React from 'react';
import './Footer.scss';
import IconLinks from '../IconLinks';

const footer: React.SFC = () => {
  return (
    <div className="footer">
      <IconLinks height={30} />
    </div>
  );
};

export default footer;
