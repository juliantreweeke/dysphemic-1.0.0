import React from 'react';
import { Link } from 'gatsby';
import './Header.scss';
import Logo from '../../images/logo-yellow.png';
import LogoInverted from '../../images/logo-yellow-inverted.png';
import Hamburger from '../Hamburger';
import IconLinks from '../IconLinks';

interface HeaderProps {
  siteTitle?: string;
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

class Header extends React.PureComponent<HeaderProps, { open: boolean }> {
  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    this.checkWindowWidth();
    window.addEventListener('resize', this.checkWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWindowWidth);
  }

  checkWindowWidth = () => {
    if (window.innerWidth > 600) {
      this.setState({ open: false });
    }
  };

  public render() {
    const { siteTitle } = this.props;
    const { open } = this.state;
    return (
      <header className="header">
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
            onClick={this.toggleOpen}
            className={`header__nav-mobile-open ${open ? 'fullScreen' : ''}`}
          >
            {navigation}
            <IconLinks height={30} />
          </nav>
        </div>
        <Hamburger toggleOpen={this.toggleOpen} open={open} />
      </header>
    );
  }
}

export default Header;
