
import './App.css'

import React from 'react';
import PokemonCard from './components/PokemonCard';

function App() {
    return (
      <div className="app">
        <div>
          <PokemonCard name="Bulbasaur" type="Grass" />
        </div>
      </div>
    );
  };
    
  export default App

