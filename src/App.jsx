import React from 'react';
import Homepage from './pages/Homepage';
import { PokemonProvider } from './context/PokemonContext';
import FullPokedex from './pages/FullPokedex';
import NavBar from "./components/NavigationBar"

function App() {
    return (
        <PokemonProvider>
        <NavBar />
            <div>
                <FullPokedex />
            </div>
        </PokemonProvider>
    );
}

export default App;