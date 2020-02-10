import React, { setState, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.setQuery = this.setQuery.bind(this);
    this.setCart = this.setCart.bind(this);

    this.state = JSON.parse(localStorage.getItem('state'))
      ? JSON.parse(localStorage.getItem('state'))
      : { query: "", cart: {} };
  }

  setQuery(query) {
    this.setState({ query: query });
    localStorage.setItem('state', JSON.stringify({ query: query, cart: this.state.cart }));
  }

  setCart(cart) {
    this.setState({ cart: cart });
    localStorage.setItem('state', JSON.stringify({ query: this.state.query, cart: cart }));
  }

  render() {
    return (
      <div>
        <Navbar query={this.state.query} setQuery={this.setQuery} />
        <Switch>
          <Route exact path="/">
            <Home query={this.state.query} setQuery={this.setQuery} cart={this.state.cart} setCart={this.setCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={this.state.cart} setCart={this.setCart} />
          </Route> />
      </Switch>
      </div >
    );
  }
}

export default App;
