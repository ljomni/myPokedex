import { useState } from 'react';
import './App.css'

import React from 'react';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: 'mew',
  },
];


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleNextClick = () => {
    setPokemonIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevClick = () => {
    setPokemonIndex((prevIndex) => prevIndex - 1);
  };
    return (
      <div className="app">
        <div>
        <button onClick={handlePrevClick} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleNextClick}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        </div>
      </div>
    );
  };
    
  export default App

