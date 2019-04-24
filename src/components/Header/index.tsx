import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import Logo from '../../images/logo-yellow-fill.png';

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
              <li>NEWS</li>
              <li>
                <Link to="/music/">MUSIC</Link>
              </li>
              <li>MERCH</li>
              <li>SHOWS</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
