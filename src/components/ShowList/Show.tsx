import React from 'react';
import './ShowList.scss';

interface ShowProps {
  data: {
    title: string;
    facebook: string;
    date: string;
    month: string;
    dateNumber: number;
    streetAddress: string;
    image: {
      file: {
        url: string;
      };
    };
  };
}

const show: React.SFC<ShowProps> = ({ data }) => {
  const { title, image, facebook, month, dateNumber, streetAddress } = data;
  return (
    <li>
      <a
        className="show"
        {...(facebook ? { href: facebook } : {})}
        target="_blank"
      >
        <div className="show__date">
          <p className="show__dateNumber">{dateNumber}</p>
          <p className="show__month">{month}</p>
        </div>
        <div className="show__info">
          <h2 className="show__title">{title}</h2>
          <p className="show__address">{streetAddress}</p>
        </div>
        {image.file.url && <img src={image.file.url} alt={title} />}
      </a>
    </li>
  );
};

export default show;
