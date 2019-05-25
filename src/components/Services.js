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

	render() {
    let services = data.servicesData.map((service, i)=> {
      return(
        <button key={i} onClick={() => this.handleClick(service.category)}>
          <li className="subheader-text" style={{display: 'inline', margin: '5px'}} key={i}>{service.header}</li>
        </button>      
      )
    })

    let displayInfo = this.state.displayInfo.map((category, i) => {
      return (
        <div style={{background: 'white'}} className="service-display-info subheader-text">
          <p>{category.subHeader}</p>
          <ul key={i}>
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
        <div className="">
        </div>
        <Row className=""> 
          <Col xs='12' md={{ offset: 1, span: 10 }}>
            <div className="service-header">
              {services}
            </div>
          </Col>
        </Row> 
        <Row>
          <Col className=" service-display-info-wrapper" xs='12' md={{ offset: 1, span: 10 }}>
              {displayInfo}
          </Col>
        </Row>  
      </div>
		)
	}
}

export default Services
