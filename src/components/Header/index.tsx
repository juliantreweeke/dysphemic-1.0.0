import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import Logo from '../../images/logo-yellow.png';
import LogoInverted from '../../images/logo-yellow-inverted.png';
import Hamburger from '../Hamburger';
import IconLinks from '../IconLinks';

interface HeaderProps {
  siteTitle?: string;
  open?: boolean;
  toggleOpen?: any;
}

const navigation = (
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
);

class Header extends React.PureComponent<HeaderProps> {
  public render() {
    const { siteTitle, open, toggleOpen } = this.props;
    return (
      <header className={`header ${open ? 'header-fixed' : ''}`}>
        <div className="header__content">
          <Link to="/" className="header__link">
            <img
              className="header__image"
              src={open ? LogoInverted : Logo}
              alt={siteTitle}
            />
          </Link>
          <nav className="header__nav">{navigation}</nav>

          <nav
            onClick={toggleOpen}
            className={`header__nav-mobile-open ${open ? 'fullScreen' : ''}`}
          >
            <div className="header__nav-mobile-open-content">
              {navigation}
              <IconLinks height={30} />
            </div>
          </nav>
        </div>
        <Hamburger toggleOpen={toggleOpen} open={open} />
      </header>
    );
  }
}

export default Header;
