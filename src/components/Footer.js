import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as data from '../constants/menuItems.js';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component {
  render() {  
    let menuLinks = data.menuItems.map((item, i) => {
      return (
        <Link to={item.link} key={i}>
          <li className="footer-link-item" key={i}>{item.title} / </li>
        </Link>
      )
    })

    return (
      <Container>
        <Row>
          <Col>
            <ul className="footer-navigation">
              {menuLinks}
            </ul>
          </Col>

          <Col>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;