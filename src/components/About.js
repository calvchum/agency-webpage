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
      <Container>
        <Row>
          <Col xs="12" md={{ offset: 1, span: 10 }}>
            <h1 className="subheader-text">
              About
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md={{ offset: 1, span: 10 }}>
            {members}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;