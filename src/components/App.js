import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';
import About from './About';

class App extends Component {
  render() {  
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Header}/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/about/" component={About}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
