import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Cart from './components/pages/Cart';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/cart" component = {Cart} />
      </Switch>
    </div>
  );
}

export default App;
