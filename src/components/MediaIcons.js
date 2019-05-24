import React, { Component } from 'react';

class MediaIcons extends Component {

  constructor() {
    super()
    this.state = {
      mediumActive: false,
      mailActive: false
    }
    this.onEnter = this.onEnter.bind(this)
  }

  onEnter(type) {
    this.setState(() => {
      return { [`${type}Active`]: true}
    })
  }

  onLeave(type) {
    this.setState(() => {
      return { [`${type}Active`]: false}
    })
  }

  render() {  

  const mailInactive = require('../assets/mail-inactive.svg')
  const mailActive = require('../assets/mail-active.svg')
  const mediumInactive = require('../assets/medium-inactive.svg')
  const mediumActive = require('../assets/medium-active.svg')
  
    return (
      <div className="social-media-wrapper">
        <a href="mailto: benquartermaine3@icloud.com">
          <img src={(this.state.mailActive ? mailActive : mailInactive)} alt="email link" onMouseEnter={() => this.onEnter('mail')} onMouseLeave={() => this.onLeave('mail')}/>
        </a>
        <a href="https://medium.com/@BQWA">
          <img src={(this.state.mediumActive ? mediumActive : mediumInactive)} alt="email link" onMouseEnter={() => this.onEnter('medium')} onMouseLeave={() => this.onLeave('medium')}/>
        </a>
      </div>
    );
  }
}

export default MediaIcons;
