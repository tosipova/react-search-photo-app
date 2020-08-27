import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SinglePhoto from './SinglePhoto';
import MyContext from './Context';


const App = () => {
  const [photos, setPhotos] = React.useState([]);

  return (
    <MyContext.Provider value={{
      photos,
      setPhotos
    }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/photos/:id">
            <SinglePhoto />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
        </Switch>
      </BrowserRouter >
    </MyContext.Provider>
  )
};


export default App;
