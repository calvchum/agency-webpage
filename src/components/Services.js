import React, { Component } from 'react';
import * as data from '../constants/servicesInfo';
import { Container, Row, Col } from 'react-bootstrap';

class Services extends Component {
  constructor() {
    super();
    this.state = {
      displayInfo: []
    }
    this.handleClick = this.handleClick.bind(this)
  }  

  handleClick(category) {
    this.setState({
      displayInfo: category
    })
  }

  componentDidMount() {
    const defaultService = data.servicesData[0].category
    this.setState({
      displayInfo: defaultService
    })
  }

	render() {
    let services = data.servicesData.map((service, i)=> {
      return(
        <button className={`service-header-button ${service.category === this.state.displayInfo ? 'service-focus' : ''}`} key={i} onClick={() => this.handleClick(service.category)}>
          <li className="subheader-text" style={{display: 'inline', margin: '5px'}} key={i}>{service.header}</li>
        </button>      
      )
    })

    let displayInfo = this.state.displayInfo.map((category, i) => {
      return (
        <div className="service-display-info">
          <p className='subheader-text'>{category.subHeader}</p>
          <ul className='body-text' key={i}>
            {category.listItems.map((listItem, i) => {
              return (
                <li key={i}>{listItem}</li>
              )
            })}          
          </ul> 
        </div>
      )
    })

		return (
      <div className="background">
        <Row>
          <Col className="page-header" xs='12' md={{ offset: 1, span: 10 }}>
            <h1 className="subheader-text">
            Services</h1>
          </Col>
        </Row>
        <Row className=""> 
          <Col className="box-shadow " xs='12' md={{ offset: 1, span: 10 }}>
            <div className="service-header">
              {services}
            </div>
          </Col>
        </Row> 
        <Row>
          <Col style={{background: 'white'}} className="box-shadow service-display-info-wrapper" xs='12' md={{ offset: 1, span: 10 }}>
                {displayInfo}
          </Col>
        </Row>  
      </div>
		)
	}
}

export default Services
