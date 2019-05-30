import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as data from '../constants/menuItems.js';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component {
  render() {  

  {/* NAVIGATION LINKS */}
    let menuLinks = []

    menuLinks.push(data.menuItems.slice(0, -1).map((item, i) => {
          return (
            <Link to={item.link} className="body-text footer-link-item" key={i}>
              <li key={i}> {item.title} </li>
              <div> / </div>
            </Link>
          )
        }))

    menuLinks.push(data.menuItems.slice(-1).map((item, i) => {
          return (
            <Link to={item.link} className="body-text footer-link-item" key={i}>
              <li key={i}> {item.title} </li>
            </Link>
          )
        }))

    // menuLinks.push(data.menuItems.slice(-1).title)

    return (
        <Row className="footer-container">
    {/* RENDERING NAVIGATION LINKS */}
          <Col className="footer-content-align" xs="12" md="6" lg="6">
            <ul className="footer-navigation">
              {menuLinks}
            </ul>
          </Col>
    {/* COPYRIGHT */}
          <Col className="footer-content-align copyright-justify-content" xs="12" md="6" lg="6">
            <p className="body-text ">© 2019 Dark Green Design</p>
          </Col>
        </Row>
    );
  }
}

export default Footer;