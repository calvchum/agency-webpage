import React, { Component } from 'react';
import Project from './Project'
import * as data from '../constants/projectInfo';
import { Container, Row, Col } from 'react-bootstrap';


class Projects extends Component {
  render() {  
  let projects = data.projectData.map((project, i) => {
    return(
      <Project
        key={i}
        project={project}
      />
    )
  }) 

    return (
      <Container>
        <Row>
          <Col xs='12' md={{ offset: '1', span: 10 }} className="page-header">
          <h1 className="subheader-text">Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col xs='12' md={{ offset: '1', span: 10 }}>
            {projects}       
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Projects;