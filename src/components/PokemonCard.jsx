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
  


export default PokemonCard;