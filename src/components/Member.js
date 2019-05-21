import React, { Component } from 'react';

class Member extends Component {
  render() {  
    const { name, title, img, desc } = this.props.member
    return (
      <div>
        <img src={img} alt={`${name}'s mug`}/>
        <h1>
          {name} | {title}
        </h1>
        <p>
          {desc}
        </p>
      </div>
    );
  }
}

export default Member;