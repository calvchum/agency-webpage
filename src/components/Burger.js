import React, {Component} from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    return (
      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
        <header className="Cart__header">
          <h2>Your cart</h2>
          <button
            onClick={this.props.handleCartClose}
            className="Cart__close">
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

export default Cart;
