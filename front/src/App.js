import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import '../src/styles/App.css';

import Category from './components/Category/Category';
import Recipes from './components/Recipes/Recipes'
import Page from './components/Page/Page';

function App() {
  return (
    <React.Fragment>
      <Switch>

        {/* <Route path="/:page">
          <Page />
        </Route>

        <Route path="/:category">
          <Recipes />
        </Route> */}

        <Route path="">
          <Category />
        </Route>

      </Switch>
    </React.Fragment>
  );
}

export default App;
