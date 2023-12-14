import React from 'react';

const PokemonCard = ({ name, type }) => {
  const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';

  return (
    <figure>
      <img src={imageUrl} alt="Bulbasaur" />
      <figcaption>Bulbasaur</figcaption>
    </figure>
  );
};
  

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

const pokemonCard = () => {
  const pokemon = pokemonList[1]; 

  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
    </div>
  );
};

export default PokemonCard;