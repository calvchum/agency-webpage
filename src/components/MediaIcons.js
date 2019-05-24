import React, { Component } from 'react';

class MediaIcons extends Component {
  render() {  
    return (
      <div className="social-media-wrapper">
        <a href="mailto: benquartermaine3@icloud.com">
          <img src={ require('../assets/mail-inactive.svg') } alt="email link"/>
        </a>
        <a href="https://medium.com/@BQWA">
          <img src={ require('../assets/medium-inactive.svg') } alt="email link"/>
        </a>
      </div>
    );
  }
}

export default MediaIcons;
