import React, { Component } from 'react';

class Header extends Component {
  render() {  
    return (
      <div>
        <h1>
        <button onClick={this.props.handleBurgerOpen}> 🍔 </button>
          Header
        </h1>
      </div>
    );
  }
}

export default Header;