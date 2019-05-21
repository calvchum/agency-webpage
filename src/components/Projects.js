import React, { Component } from 'react';
import Project from './Project'
import * as data from '../constants/projectInfo';

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
      <div>
        <h1>Projects</h1>
        <ul>{projects}</ul>
      </div>
    )
  }
}

export default Projects;