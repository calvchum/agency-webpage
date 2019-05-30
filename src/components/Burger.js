import React, {Component} from 'react';
import * as data from '../constants/menuItems.js';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class Burger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: ''
    }
    this.setCurrentPage = this.setCurrentPage.bind(this)
    this.escFunction = this.escFunction.bind(this)

    this.props.history.listen((location, action) => {
      this.setCurrentPage(location.pathname)
    })

  }

  escFunction(event) {
    if(event.keyCode === 27) {
      this.props.handleBurgerClose();
    }
  }

  componentDidMount() {
    const path = this.props.location.pathname
    this.setState({
      currentPage: path
    })
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  setCurrentPage(location) {
    this.setState({
      currentPage: location
    })
  }

  handleClickOutside() {
    this.props.handleBurgerClose()
  }

  render() {
    let menuLinks = data.menuItems.map((item, i) => {
      return (
        <Link to={item.link} key={i} className={`${item.link === this.state.currentPage ? 'burger-menu-highlighted': 'burger-menu-links'}`}>
          <li className='test' key={i} onClick={this.props.handleBurgerClose}><div className="active-rectangle"></div>{item.title}</li>
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

export default onClickOutside(Burger);
