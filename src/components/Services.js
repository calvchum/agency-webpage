import React, { Component } from 'react'
import * as data from '../constants/servicesInfo'

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
          <li style={{display: 'inline', margin: '5px'}} key={i}>{service.header}</li>
        </button>
      )
    })

    let displayInfo = this.state.displayInfo.map((category, i) => {
      return (
        <div key={i}>
          <p>{category.subHeader}</p>
          <ul>
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
      <div>
        <ul>
          {services}
        </ul>
        <div>
          {displayInfo}
        </div>
      </div>
		)
	}
}

export default Services