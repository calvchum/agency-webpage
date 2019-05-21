import React, { Component } from 'react';

class Project extends Component {
  render() {  
    const { name, img, desc, tag } = this.props.project

    let tags = tag.map((e)=>{
      return (
        <li>
          {e}
        </li>
      )
    })

    return (
      <div>
        <img src={img} alt={name} style={{width: '600px'}}/>
        <h2>{name}</h2>
        <p>{desc}</p>
        <p>{tags}</p>
      </div>
    );
  }
}

export default Project;