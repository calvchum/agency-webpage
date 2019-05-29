import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Layover from './Layover';
import Projects from './Projects';


class Landing extends Component {
  render() {  
    return (
      <div>
      {/* UI/UX/DEV banner */}
        <Row className="hero-wrapper">
          <Col xs="12" md={{ offset: 2, span: 8 }} className="secondary-content">
          <h1 className="header-text">
          UX / UI / Development
          </h1>
          <a href="#secondary-wrapper" className="next-page bounce"><img src={ require('../assets/down-line-arrow.svg') } alt="downward point arrow"/></a>
          </Col>
        </Row>  

      {/* Below the fold UI UX DEV explanation*/}

        <Row id="secondary-wrapper" className="hero-explanation-wrapper">
          <Col xs="12" md={{ offset: 2, span: 8 }} className="secondary-content">

        {/* UX DEFINITION SECTION */}

          <Row className=" landing-term-definition">
            <Col xs='12' md='2'>
              <h1 className="header-text">UX</h1>
            </Col>
            <Col className="active-landing  landing-individual-term" xs='12' md='10'>
              <p className="subheader-text">The User Experience involves all aspects of a users interaction with a company, its services, and its products.</p>
              <p className="body-text landing-quote">"The UX is seamless, the users prefer it this way"</p>
            </Col>
          </Row>

      {/* UI DEFINITION SECTION */}

          <Row className=" landing-term-definition">
            <Col xs='12' md='2'>
              <h1 className="header-text">UI</h1>
            </Col>
            <Col className="active-landing landing-individual-term" xs='12' md='10'>
              <p className="subheader-text">The User Interface is a conduit between human and computer interaction, the space where a user interacts with a computer to complete tasks.</p>
              <p className="body-text landing-quote">"That websites UI is aesthetically pleasing."</p>
            </Col>
          </Row>
      
      {/* DEV DEFINITION SECTION */}

          <Row className=" landing-term-definition">
            <Col xs='12' md='2'>
              <h1 className="header-text">Dev</h1>
            </Col>
            <Col className="active-landing landing-individual-term" xs='12' md='10'>
              <p className="subheader-text">Development is the combining of UX and UI into a functional product or service.</p>
              <p className="body-text landing-quote">"Developing is mostly googling and a lot of communication."</p>
            </Col>
          </Row>
          </Col>
        </Row>

    {/* Below the fold CTA */}
        <Projects />
      </div>
    );
  }
}

export default Landing;
