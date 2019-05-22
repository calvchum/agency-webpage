import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import About from './About';
import Contacts from './Contacts';
import Projects from './Projects';
import Burger from './Burger';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isBurgerOpen: false,
    }
    this.handleBurgerOpen = this.handleBurgerOpen.bind(this)
    this.handleBurgerClose = this.handleBurgerClose.bind(this)
  }

  handleBurgerOpen() {
    this.setState({
      isBurgerOpen: true
    })
  }

  handleBurgerClose() {
    this.setState({
      isBurgerOpen: false
    })
  }


  render() {  

    const renderHeader = (props) => {
      return (
        <Header
          handleBurgerOpen={this.handleBurgerOpen}
          handleBurgerClose={this.handleBurgerClose}
          {...props}
        />
      )    
    }

    return (
      <BrowserRouter>
        <div>
          <Route path="/" render={renderHeader}/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/about/" component={About}/>
          <Route exact path="/contacts/" component={Contacts}/>
          <Route exact path="/projects/" component={Projects}/>
          <Burger
            handleBurgerOpen={this.handleBurgerOpen}
            handleBurgerClose={this.handleBurgerClose}
            isBurgerOpen={this.state.isBurgerOpen}          
          />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
