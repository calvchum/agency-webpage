import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {  
    return (

      <Row>
        <Col className='header-container'>
          <button id="hamburger-menu-icon" className={this.props.isBurgerOpen ? 'active' : ''} onClick={this.props.handleBurgerOpen}><span></span><span></span></button>
          <div className="header-positioning">
            <p className="header-text">agency name.</p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Header;