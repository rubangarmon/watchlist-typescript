import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';

import './App.css';
import './css/main.css';
import './lib/font-awesome/css/all.min.css'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
            <Route exact path="/">
              <Watchlist />                
            </Route>

            <Route path="/watched">
              <Watched />                
            </Route>

            <Route path="/add">
              <Add />                
            </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
