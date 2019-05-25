import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Member extends Component {
  render() {  
    const { name, title, img, desc, link, href } = this.props.member
    return (
      <Row>
        <Col className="about-member" xs="12" md={{ offset: 1, span: 10 }} lg={{ offset: 2, span: 8 }}>
          <div className="">
            <img src={img} height="200px" width="200px" alt={`${name}'s mug`}/> 
          </div>
          <div className="about-member-wrapper">
            <div className="about-member-info">
              <h1 className="capitalize subheader-text">
                {name} / {title}
              </h1>
              <p className="body-text">
                {desc}
              </p>
            </div>
            <div className="about-member-link body-text">
              <a href={href}>{link}</a>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Member;