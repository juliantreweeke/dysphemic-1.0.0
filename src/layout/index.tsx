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
                    name: 'description',
                    content: 'Dysphemic website of electronic music producer',
                  },
                  {
                    name: 'keywords',
                    content: 'Gatsby, TypeScript, Starter',
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
