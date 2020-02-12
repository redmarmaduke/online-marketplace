import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import NavbarSearch from './components/NavbarSearch';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.setQuery = this.setQuery.bind(this);
    this.setCart = this.setCart.bind(this);
    this.setToken = this.setToken.bind(this);

    this.state = JSON.parse(localStorage.getItem('state'))
      ? JSON.parse(localStorage.getItem('state'))
      : { query: "", cart: {}, token: "" };
  }

  setQuery(query) {
    this.setState({ query: query });
    localStorage.setItem('state', JSON.stringify({ ...this.state, query: query }));
  }

  setCart(cart) {
    this.setState({ cart: cart });
    localStorage.setItem('state', JSON.stringify({ ...this.state, cart: cart }));
  }

  setToken(token) {
    this.setState({ token: token });
    localStorage.setItem('state', JSON.stringify({ ...this.state, token: token }));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <NavbarSearch query={this.state.query} setQuery={this.setQuery} cart={this.state.cart} setCart={this.setCart} token={this.state.token} setToken={this.setToken} />
            <Home query={this.state.query} setQuery={this.setQuery} cart={this.state.cart} setCart={this.setCart} token={this.state.token} setToken={this.setToken} />
          </Route>
          <Route path="/cart">
            <NavbarSearch query={this.state.query} setQuery={this.setQuery} cart={this.state.cart} setCart={this.setCart} token={this.state.token} setToken={this.setToken} />
            <Cart cart={this.state.cart} setCart={this.setCart} />
          </Route> />
          <Route path="/signup">
            <NavbarSearch query={this.state.query} setQuery={this.setQuery} cart={this.state.cart} setCart={this.setCart} setToken={this.setToken} />
            <SignUp setToken={this.setToken} />
          </Route>
          <Route path="/login">
            <NavbarSearch query={this.state.query} setQuery={this.setQuery} cart={this.state.cart} setCart={this.setCart} setToken={this.setToken} />
            <Login setToken={this.setToken} />
          </Route>
        </Switch>
      </div >
    );
  }
}

export default App;
