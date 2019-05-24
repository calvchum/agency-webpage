import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class Landing extends Component {
  render() {  
    return (
      <div>
        <Row className="hero-wrapper">
          <Col xs="12" md={{ offset: 2, span: 8 }} className="secondary-content">
            <h1 className="header-text">UI / UX / Development</h1>
            <a href="#secondary-wrapper" className="next-page bounce"><img src={ require('../assets/down-arrow.svg') } alt="downward point arrow"/></a>
          </Col>
        </Row>        
        <Row id="secondary-wrapper" className="secondary-wrapper">
          <Col xs="12" md={{ offset: 3, span: 6 }} className="secondary-content">
            <p className="subheader-text landing-secondary-info">This section should be for a quick why trust us/ what who we are elevator pitch thats not cheap and salesy but honest and to the point</p>
            <Link className="view-projects-button" to="/projects">
              <a className="subheader-text">View Projects</a>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Landing;
