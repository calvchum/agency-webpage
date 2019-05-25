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
            <h1 className="page-header subheader-text">
              About
            </h1>
          </Col>
        </Row>
        {members}
      </div>
    );
  }
}

export default About;
