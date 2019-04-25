import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import Logo from '../../images/logo-yellow.png';

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
              <li>
                <Link activeClassName="active" to="/music/">
                  MUSIC
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="/about/">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="/shop/">
                  SHOP
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="/contact/">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
