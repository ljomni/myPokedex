
import './App.css'

import React from 'react';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: 'bulbasaur',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'mew',
  },
];


function App() {
  const pokemon = pokemonList[0]; 
    return (
      <div className="app">
        <div>
          <PokemonCard pokemon={pokemon} />
        </div>
      </div>
    );
  };
    
  export default App

