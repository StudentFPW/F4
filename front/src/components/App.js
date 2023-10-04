import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import '../styles/App.css';

import Category from './Category/Category';
import Recipes from './Recipes/Recipes'

function App() {
  return (
    <React.Fragment>
      <Switch>

        <Route path="/category">
          <Category />
        </Route>

        <Route path="/recipes">
          <Recipes />
        </Route>

      </Switch>
    </React.Fragment>
  );
}

export default App;
