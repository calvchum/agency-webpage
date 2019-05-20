import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import About from './About';
import Contacts from './Contacts';
import Projects from './Projects';

class App extends Component {
  render() {  
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Header}/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/about/" component={About}/>
          <Route exact path="/contacts/" component={Contacts}/>
          <Route exact path="/projects/" component={Projects}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
