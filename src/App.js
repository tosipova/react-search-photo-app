import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Photo from './pages/Photo';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/photos/:id">
          <Photo />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </BrowserRouter >
  )
};

export default App;
