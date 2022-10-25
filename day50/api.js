export const getData = async () => {
  let pokedex = [];

  const getPokemonList = async () => {
    try {
      fetch("https://pokeapi.co/api/v2/pokemon?offset=300&limit=20")
        .then((res) => res.json())
        .then((data) => {
          const pokemons = data.results;

          Promise.all(
            pokemons.map((pokemon) => {
              fetch(pokemon.url)
                .then((response) => response.json())
                .then((dataInfo) => {
                  const obj = {
                    name: dataInfo.species.name,
                    types: dataInfo.types,
                    image: dataInfo.sprites.front_shiny,
                  };
                  pokedex.push(obj);
                });
            })
          );
        });
    } catch (e) {
      console.log(e);
    }
  };
  getPokemonList();

  return pokedex;
};

getData();
