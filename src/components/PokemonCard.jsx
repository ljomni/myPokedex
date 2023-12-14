

  

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

const PokemonCard = (props) => {
  console.log(props);
  const { pokemon } = props;



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