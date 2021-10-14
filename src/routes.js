import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch Switch>
        <Route component={Home} path="/" exact />
        <Route component={Cart} path="/cart" />
      </Switch>
    </BrowserRouter>
  );
}
