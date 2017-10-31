'use strict';

import React from 'react';

let igImage = require('../images/ig.png');

require('styles//About.css');

class AboutComponent extends React.Component {
  render() {
    return (
      <div className="about-component">
        <div className="col-md-6 col-md-push-6 vertical-center-r about-content">
          <p className="large-margin-bottom">
            ABOUT
          </p>
          <div className="large-margin-bottom">
            <p>Founded in 2017, Michiru Design Studio is based in Sydney, Australia.</p>
            <p>Prior to starting her own practice, Michiru was one of the founding members of
            Koichi Takada Architects, one of Sydney’s leading architecture and interior design
            firm. She worked and grew with the company for almost 7 years.</p>
            <p>Having worked in Tokyo and Sydney, the design philosophy of Michiru Design
            Studio focuses on subtle texture, drawing warmth from raw materials and
            creating timeless spaces.</p>
            <p>Michiru has background in many built environments – from bespoke, high-end
            residential projects through to multiresidential towers, office fitouts, restaurant &
            International Museum work. She has experience in many complex briefs, national
            & international clients and unique complexities and challenges that arise with
            different sites</p>
            <p>At Michiru Design Studio, the emphasis is placed on the delivery of beautiful
            and peaceful spaces carefully crafted for clients from conception to completion,
            working collaboratively with clients and consultants in all stages of the project
            life-cycle in search for the best outcome.</p>
          </div>
          <p>CONTACT: info@michirudesign.com</p>
        </div>
        <div className="col-md-6 col-md-pull-6 vertical-center-l about-content">
          <div className="text-center">
            <img className="ig-logo" src={igImage} alt="Michiru Design Studio logo" />
            <div className="md-margin-bottom">| WEBSITE COMING SOON |</div>
            <div>please let us take you to our instagram page for now</div>
          </div>
        </div>
      </div>
    );
  }
}

AboutComponent.displayName = 'AboutComponent';

// Uncomment properties you need
// AboutComponent.propTypes = {};
// AboutComponent.defaultProps = {};

export default AboutComponent;
