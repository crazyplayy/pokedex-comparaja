import React from 'react';
import Homepage from './pages/Homepage';
import { PokemonProvider } from './context/PokemonContext';

function App() {
    return (
        <PokemonProvider>
            <div>
                <Homepage />
            </div>
        </PokemonProvider>
    );
}

export default App;