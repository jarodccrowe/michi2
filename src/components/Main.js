require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { default as Fade } from 'react-fade'

import AboutComponent from '../components/AboutComponent';
import SplashComponent from '../components/SplashComponent';

class AppComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.fadeOut = this.fadeOut.bind(this);

    this.state = {
      fadeOut: false,
      visibility: 'visible'
    }
  }

  fadeOut() {
    const fadeDuration = 500;

    this.setState({ fadeOut: true });

    setTimeout(() => {
      this.setState({
        visibility: 'hidden'
      })
    }, fadeDuration)
  }

  render() {
    const fadeDuration = 0.5

    return (
      <div className="index">
        <Fade
          out={this.state.fadeOut}
          duration={fadeDuration}
          style={{
          visibility: this.state.visibility
        }}
        >
          <div onClick={this.fadeOut}>
            <SplashComponent />
          </div>
        </Fade>
        {this.state.visibility === 'hidden' && <Fade><AboutComponent /></Fade>}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
