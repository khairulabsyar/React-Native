const getPokemonList = async () => {
  try {
    return fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        Math.floor(Math.random() * 1154) + 1
      }&limit=20`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.results;
      });
  } catch (e) {
    console.error(e);
  }
};

const getPokemonData = async (url) => {
  try {
    return fetch(url)
      .then((res) => res.json())
      .then(async (data) => {
        const obj = {
          name: data.species.name,
          types: data.types,
          image: data.sprites.front_default,
        };

        return obj;
      });
  } catch (e) {
    console.error(e);
  }
};

export const getData = async () => {
  let res = {};

  try {
    const pokemons = await getPokemonList();
    const promises = pokemons.map(async (pokemon) => {
      const pokemonData = await getPokemonData(pokemon.url);

      return pokemonData;
    });

    return Promise.all(promises).then((data) => {
      return (res = {
        status: 200,
        data,
      });
    });
  } catch (e) {
    console.error(e);
  }
};
