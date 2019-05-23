import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import About from './About';
import Contacts from './Contacts';
import Projects from './Projects';
import Services from './Services';
import Burger from './Burger';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isBurgerOpen: false,
    }

    this.handleBurgerOpen = this.handleBurgerOpen.bind(this)
    this.noScroll = this.noScroll.bind(this)
  }

  handleBurgerOpen() {
    this.setState({
      isBurgerOpen: !this.state.isBurgerOpen
    })
    this.noScroll()
  }

  noScroll() {
    this.state.isBurgerOpen ? document.querySelector('body').classList.remove('no-scroll') : document.querySelector('body').classList.add('no-scroll');
  }


  render() {  

    const renderHeader = (props) => {
      return (
        <Header
          handleBurgerOpen={this.handleBurgerOpen}
          isBurgerOpen={this.state.isBurgerOpen}
          {...props}
        />
      )    
    }

    const renderBurger = (props) => {
      return (
        <Burger
          handleBurgerOpen={this.handleBurgerOpen}
          handleBurgerClose={this.handleBurgerClose}
          isBurgerOpen={this.state.isBurgerOpen}          
          {...props}
        />
      )
    }

    return (
      <BrowserRouter>
        <div>
          <Route path="/" render={renderHeader}/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/services" component={Services}/>
          <Route path="/" render={renderBurger}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
