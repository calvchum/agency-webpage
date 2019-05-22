import React, {Component} from 'react';

class Burger extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  render() {
    return (
      <div className={`Burger ${this.props.isBurgerOpen ? 'Burger--open' : ''}`}>
        <header className="Burger__header">
          <button
            onClick={this.props.handleBurgerClose}
            className="Burger__close">
            ×
          </button>
        </header>
        <div>
          <ul>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Burger;
