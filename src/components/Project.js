import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Project extends Component {
  render() {
    const { name, img, desc, tag, medium } = this.props.project;

    let tags = [];

    tags.push(
      tag.slice(0, -1).map((e, i) => {
        return (
          <span key={i}>
            {e} /<span> </span>
          </span>
        );
      })
    );

    tags.push(tag.slice(-1));

    return (
      <div className="link-wrapper">
        <a href={medium.frontend} target="_blank">
          <Row
            className="project-wrapper"
            style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
          >
            <Col className="display-none project-content-alignment">
              <div className="project-header">
                <h1 className="header-text">{name}</h1>
              </div>
              <div className="project-info">
                <p className="tags-text">{tags}</p>
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
