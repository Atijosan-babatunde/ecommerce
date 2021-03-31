import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar.js';
import ProductList from './components/ProductList.js';
import Details from './components/Details.js';
import Cart from './components/Cart.js';
import Default from './components/Default.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { details: undefined, cart: [] };
    this.setDetail = this.setDetail.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.modifyCartProduct = this.modifyCartProduct.bind(this);
  }

  setDetail(current) {
    this.setState({ details: current });
  }

  addToCart(current) {
    this.setState({ cart: [...this.state.cart, { ...current, quantity: 1 }] });
  }

  removeFromCart(id) {
    this.setState({ cart: [...this.state.cart].filter(item => item.id !== id) });
  }

  modifyCartProduct(action, id) {
    const product = this.state.cart.find(item => item.id === id);
    if (action === "dec" && product.quantity === 1) {
      return this.removeFromCart(id);
    }

    this.setState({
      cart:
        this.state.cart.map(item => {
          if (item.id === id) {
            if (action === 'inc') {
              item.quantity = item.quantity + 1;
            } else {
              item.quantity = item.quantity - 1;
            }
            return item;
          }
          return item;
        })
    })

 
 
  }

     

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <ProductList
                state={this.state}
                addToCart={this.addToCart}
                setDetail={this.setDetail}
                cart={this.state.cart}
              />
            )}
          />

          <Route
            path="/details"
            render={(props) => (
              <Details
                details={this.state.details}
                cart={this.state.cart}
                addToCart={this.addToCart}
              />
            )} />

          <Route
            path="/cart"
            render={(props) => (
              <Cart
                cart={this.state.cart}
                modifyCartProduct={this.modifyCartProduct}
              />
            )} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );

  }
}

export default App;
