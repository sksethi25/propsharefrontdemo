import React from 'react';
import './static/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';


function App() {
  return (
     <BrowserRouter >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
