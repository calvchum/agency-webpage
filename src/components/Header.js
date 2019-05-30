import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MediaIcons from './MediaIcons';

class Header extends Component {
  render() {  

    const inactiveButton = <button id="hamburger-menu-icon" onClick={this.props.handleBurgerOpen}><span></span><span></span></button>

    const activeButton = <div id="hamburger-menu-icon-active" ><span></span><span></span></div>

    return (
      <Row>
        <MediaIcons/>
        <Col className='header-container'>
          {this.props.isBurgerOpen ? activeButton : inactiveButton}
          <div className="header-positioning">
            <Link style={{textDecoration: 'none', color: 'white'}} to='/'> 
              <p className="header-text">dark green</p>
            </Link>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Header;