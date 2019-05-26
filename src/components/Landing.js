import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Layover from './Layover';


class Landing extends Component {
  // Function hides the layover animation so the links on the landing page can be clicked.
  componentDidMount() {
    const layover = document.querySelector('.layover-wrapper');
    setTimeout(() => layover.classList.add('hidden'), 3000);
  }

  render() {  
    return (
      <div>
        <Layover/>
        <Row className="hero-wrapper">
          <Col xs="12" md={{ offset: 2, span: 8 }} className="secondary-content">
          <Row className="landing-term-definition">
            <Col>
              <h1 className="header-text">UX</h1>
            </Col>
            <Col>
              <p className="body-text">UX is the flow through your website</p>
            </Col>
          </Row>
          <Row className="landing-term-definition">
            <Col>
              <h1 className="header-text">UI</h1>
            </Col>
            <Col>
              <p className="body-text">UX is the flow through your website</p>
            </Col>
          </Row>
          <Row className="landing-term-definition">
            <Col>
              <h1 className="header-text">Dev</h1>
            </Col>
            <Col>
              <p className="body-text">UX is the flow through your website</p>
            </Col>
          </Row>
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
