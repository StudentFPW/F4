import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import '../styles/App.css';

import Category from './Category/Category';
import Recipes from './Recipes/Recipes'
import Page from './Page/Page';

function App() {
  return (
    <React.Fragment>
      <Switch>

        <Route path="/:category/:page">
          <Page />
        </Route>

        <Route path="/:category">
          <Recipes />
        </Route>

        <Route path="">
          <Category />
        </Route>

      </Switch>
    </React.Fragment>
  );
}

export default App;
