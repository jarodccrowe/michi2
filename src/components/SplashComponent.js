'use strict';

import React from 'react';

let mdsImage = require('../images/michiru-design-studio-logo-GREY.jpg');

require('styles//Splash.css');

class SplashComponent extends React.Component {
  render() {
    return (
      <div className="splash-component">
        <div className="super-centered">
          <img className="primary-logo" src={mdsImage} alt="Michiru Design Studio logo" />
          <h1 className="text-center text-uppercase">Michiru Design Studio</h1>
        </div>
      </div>
    );
  }
}

SplashComponent.displayName = 'SplashComponent';

// Uncomment properties you need
// SplashComponent.propTypes = {};
// SplashComponent.defaultProps = {};

export default SplashComponent;
