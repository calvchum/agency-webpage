import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MediaIcons from './MediaIcons';

class Header extends Component {
  render() {  
    return (
      <Row>
        <MediaIcons/>
        <Col className='header-container'>
          <button id="hamburger-menu-icon" className={this.props.isBurgerOpen ? 'active' : ''} onClick={this.props.handleBurgerOpen}><span></span><span></span></button>
          <div className="header-positioning">
            <Link style={{textDecoration: 'none', color: 'white'}} to='/'> 
              <p className="header-text">agency name.</p>
            </Link>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Header;