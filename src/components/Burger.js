import React, {Component} from 'react';
import * as data from '../constants/menuItems.js';
import { Link } from 'react-router-dom';

class Burger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: ''
    }
    this.setCurrentPage = this.setCurrentPage.bind(this)

    this.props.history.listen((location, action) => {
      this.setCurrentPage(location.pathname)
    })

  }

  componentDidMount() {
    const path = this.props.location.pathname
    this.setState({
      currentPage: path
    })
  }

    // this.props.history.listen((location, action) => {
    //   const path = this.props.location.pathname
    //   let i = data.menuItems.findIndex((item) => item.link === path);
    //   let item = data.menuItems[i];
    //   this.setState({
    //     currentPage: item
    //   })

    // })
  setCurrentPage(location) {
    this.setState({
      currentPage: location
    })
  }


  render() {
    let menuLinks = data.menuItems.map((item, i) => {
      return (
        <Link to={item.link} key={i} className={`${item.link === this.state.currentPage ? 'burger-menu-highlighted': 'burger-menu-links'}`}>
          <li className='test' key={i} onClick={this.props.handleBurgerOpen}>{item.title}</li>
        </Link>
      )
    })

    return (
      <div className={`burger-slide-out ${this.props.isBurgerOpen ? 'burger-open' : 'burger-close'}`}>
        <div className='burger-menu-links-wrapper'>
          <ul className='subheader-text '>
            {menuLinks}
          </ul>
        </div>
      </div>
    )
  }
}

export default Burger;
