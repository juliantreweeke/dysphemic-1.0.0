import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './layout.scss';

interface LayoutProps {
  className?: string;
  children: JSX.Element[];
}

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

class Layout extends React.Component<LayoutProps, {}> {
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
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data: StaticQueryProps) => {
          const { siteMetadata } = data.site;
          const { children } = this.props;
          return (
            <>
              <Helmet
                title={siteMetadata.title}
                meta={[
                  {
                    property: 'og:image',
                    content:
                      'https://www.dysphemic.com/static/mindbandit-d0648d4a14a093c24e2687f85251fd0c.jpg',
                  },
                  {
                    name: 'description',
                    content:
                      'Music Website for Electronic Bass Producer Dysphemic',
                  },
                  {
                    name: 'keywords',
                    content:
                      'dubstep, trap, edm, drum and bass,dnb, music, glitch,idm,downloads,free, world,bass,glitch hop, hip hop,music producer',
                  },
                ]}
              >
                <html lang="en" />
              </Helmet>
              <Header
                toggleOpen={this.toggleOpen}
                open={this.state.open}
                siteTitle={siteMetadata.title}
              />
              {!this.state.open && (
                <>
                  <div className="layout">{children}</div>
                  <Footer />
                </>
              )}
            </>
          );
        }}
      />
    );
  }
}

export default Layout;
