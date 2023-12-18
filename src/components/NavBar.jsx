import React from 'react';

const NavBar = ({ pokemonList, handlePokemonClick  }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handlePokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;