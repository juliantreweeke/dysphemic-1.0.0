import React from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
}

const button: React.SFC<ButtonProps> = ({ text }) => {
  return <button className="button">{text}</button>;
};

export default button;
