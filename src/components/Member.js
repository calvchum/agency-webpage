import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Member extends Component {
  render() {  
    const { name, title, img, desc } = this.props.member
    return (
      <Row>
        <Col className="about-member" xs="12" md={{ offset: 1, span: 10 }}>
        <div className="">
          <img src={img} height="200px" width="200px" alt={`${name}'s mug`}/> 
        </div>
        <div>
          <div className="">
            <h1 className="subheader-text">
              {name} | {title}
            </h1>
          </div>
            <div className="">
              <p className="body-text">
                {desc}
              </p>
            </div>
          
        </div>
        </Col>
      </Row>
    );
  }
}

export default Member;