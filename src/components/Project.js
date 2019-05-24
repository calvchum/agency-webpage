import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class Project extends Component {
  render() {  
    const { name, img, desc, tag } = this.props.project

    let tags = tag.map((e, i)=>{
      return (
        <span  key={i}>
          {e} /<span> </span> 
        </span>
      )
    })

    return (
      <div className="link-wrapper">
    {/* Calv can you make the information object include a link to a medium artcile to go in the href */}
        <a href="#" target='_blank'>
          <Row className="project-wrapper" style={{backgroundImage: `url(${img})`}}>
            <Col className="display-none project-content-alignment">
              <div className="project-header">
                <h1 className="header-text">{name}</h1>
              </div>
              <div className="project-info">
                <p className="subheader-text">{tags}</p>
                <p className="body-text">{desc}</p>
              </div>
            </Col>
          </Row>
        </a>
      </div>
    );
  }
}

export default Project;
