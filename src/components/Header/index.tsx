import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import Logo from '../../images/logo-yellow.png';
import LogoInverted from '../../images/logo-yellow-inverted.png';

interface HeaderProps {
  siteTitle?: string;
}

const navigation = (
  <ul>
    <li>
      <Link to="/" className="header__image-mobile-link">
        <img
          className="header__image-mobile-open"
          src={LogoInverted}
          alt={'dysphemic'}
        />
      </Link>
    </li>
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
);

class Header extends React.PureComponent<HeaderProps, {}> {
  public render() {
    const { siteTitle } = this.props;
    return (
      <header className="header">
        <div className="header__content">
          <Link to="/" className="header__link">
            <img className="header__image" src={Logo} alt={siteTitle} />
          </Link>
          <nav className="header__nav">{navigation}</nav>
          <nav className="header__nav-mobile-open">{navigation}</nav>
        </div>
      </header>
    );
  }
}

export default Header;
