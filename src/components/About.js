import React, { Component } from 'react';
import * as data from '../constants/aboutInfo';
import Member from './Member';

class About extends Component {
  render() { 
  let members = data.memberData.map((member, i) => {
    return(
      <Member
        key={i}
        member={member}
      />
    )
  }) 
  
    return (
      <div>
        <h1>
          About
        </h1>
        <ul>{members}</ul>
      </div>
    );
  }
}

export default About;