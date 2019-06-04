import React from 'react';
import './ShowList.scss';

import { StaticQuery, graphql } from 'gatsby';
import Show from './Show';

interface ShowListProps {}

const showList: React.SFC<ShowListProps> = () => (
  <StaticQuery
    query={graphql`
      query Shows {
        allContentfulShow(sort: { fields: date, order: ASC }) {
          nodes {
            id
            title
            date
            month
            dateNumber
            facebook
            streetAddress
            image {
              file {
                url
              }
            }
            location {
              lon
              lat
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ul className="showList">
          {data.allContentfulShow.nodes.map(show => (
            <Show data={show} />
          ))}
        </ul>
      </>
    )}
  />
);
export default showList;
