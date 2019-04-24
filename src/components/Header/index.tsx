import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import Logo from '../../images/logo.png';

interface HeaderProps {
  siteTitle?: string;
}

class Header extends React.PureComponent<HeaderProps, {}> {
  public render() {
    const { siteTitle } = this.props;

    return (
      <header className="header">
        <div className="header__content">
          <Link to="/" className="header__link">
            <img className="header__image" src={Logo} alt={siteTitle} />
          </Link>
          <nav className="header__nav">
            <ul>
              <li>News</li>
              <li>
                <Link to="/music/">Music</Link>
              </li>
              <li>Merch</li>
              <li>Shows</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
