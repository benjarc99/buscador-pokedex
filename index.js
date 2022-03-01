import getDataPokemonAndPrint from "./async-data.js";
import searchPokemon from "./search.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  getDataPokemonAndPrint();
  searchPokemon("btn-search", "input-search");
});

/****  Para comprobar la peticion de los datos a Pokemon API *****/

// const getDataPokemon = (async () => {
//   try {
//     for (let id = 1; id <= 150; id++) {
//       let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
//         pokemon = await res.data;

//       console.log(
//         pokemon.id,
//         pokemon.name,
//         pokemon.sprites.front_default,
//         // pokemon.types.length
//       );
//       for (let i = 0; i <= pokemon.types.length - 1; i++) {
//         console.log(pokemon.types[i].type.name);
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// })();
