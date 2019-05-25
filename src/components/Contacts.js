import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Contacts extends Component {
  render() {  
    return (
      <div className="min-height-wrapper">
        <Row className="contact-details-wrapper">
          <Col className="contact-location" xs="12" md={{ offset: 1, span: 10 }}>
          <div>
            <h1 className="subheader-text">A Design and Development Agency</h1>
              <span className="body-text">
                Inspire9 <br/>
                41-43 Steward Street,<br/> 
                Richmond, Melbourne
              </span>
          </div>
          <div>
            <h1 className="subheader-text">Business & General Enquiries</h1>
            <span className="body-text">
            Ben Quartermaine<br/>
            +61 488 197 887<br/>
            ben.quartermaine3@gmail.com
            </span>  
          </div>
          </Col>
        </Row>
        <Row className="contact-images">
          <Col className="contact-location" xs='12' md={{ offset: 1, span: 10 }}>
          <div>
            
            <img src={ require('../assets/map.svg')} alt=""/>
          </div>
          <div>
            
            <img src={ require('../assets/coworking.svg')} alt=""/>
          </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contacts;