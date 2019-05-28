import React, { Component } from 'react';
import * as data from '../constants/memberInfo';
import Member from './Member';
import { Container, Row, Col } from 'react-bootstrap';


class About extends Component {
  render() { 
  let members = data.memberData.map((member, i) => {
    return(
      <Member
        key={i}
        member={member}
      />
    )
  }) 

    return (
      <div className="min-height-wrapper">
        <Row>
          <Col xs="12" md={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
            <h1 className="border-bottom subheader-text">
              About
            </h1>            
            <p className="body-text">Agency Name evolved from two friends who enjoyed building side projects together decided to make it official. We are both bootcamp graduates who decided to carve our own path. We enjoy the allure of building exciting products that pushes humanity forward. We work well togeth because we understand the limits of our responsibility, but still demand good logic for all decisions any team member makes. </p>
            <h1 className=" border-bottom subheader-text">
              Team
            </h1>
          </Col>
        </Row>
        {members}
      </div>
    );
  }
}

export default About;
