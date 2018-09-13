import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import MapPage from './components/MapPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navigation/>
          <Route path="/" exact render={() => (<Landing/>)}/>
          <Route path="/map" exact render={() => (<MapPage/>)}/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
