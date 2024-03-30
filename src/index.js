import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { PokemonsContextProvider } from '../src/context/pokemonProvider';
import Homepage from './pages/Homepage';
import Favorites from './pages/Favorites';
import FullPokedex from './pages/FullPokedex';
import About from './pages/About';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <PokemonsContextProvider>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/podedex" component={ FullPokedex } />
        <Route exact path="/about" component={ About } />
        <Route path="*" component={ PageNotFound } />
      </Switch>
    </PokemonsContextProvider>
  </BrowserRouter> */}
    <App />
  </React.StrictMode>
);


