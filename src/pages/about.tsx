import React from 'react';
import Layout from '../layout';
import Video from '../components/Video/';
import Biography from '../components/Biography';
import SubscribeFormIFrame from '../components/SubscribeFormIFrame';

class About extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>About</h1>
        <Biography />
        <Video id="OPcXvgsVS_s" autoplay={true} mute={true} />
        <SubscribeFormIFrame />
      </Layout>
    );
  }
}

export default About;
