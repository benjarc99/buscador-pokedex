const d = document;

export default function getDataPokemonAndPrint() {
  const $template = d.querySelector("template").content,
    $fragment = d.createDocumentFragment(),
    $containerCards = d.querySelector(".container-cards");

  const printCardPokemon = (data) => {
    $template
      .querySelector(".img-card")
      .setAttribute("src", `${data.sprites.front_default}`);
    $template.querySelector(
      "h4"
    ).textContent = `${data.name[0].toUpperCase()}${data.name.slice(1)}`;
    if (data.types.length === 2) {
      $template.querySelector(
        ".text-card"
      ).textContent = `Type: ${data.types[0].type.name}, ${data.types[1].type.name}`;
    } else {
      $template.querySelector(
        ".text-card"
      ).textContent = `Type: ${data.types[0].type.name}`;
    }

    let aleatorio = Math.round(Math.random());
    if (aleatorio === 0) {
      $template.querySelector("button").textContent = "Remove";

      $template.querySelector("button").classList.add("btn-remove");
      $template.querySelector("button").classList.remove("btn-add-favs");
    }
    if (aleatorio === 1) {
      $template.querySelector("button").textContent = "Add to favs";

      $template.querySelector("button").classList.add("btn-add-favs");
      $template.querySelector("button").classList.remove("btn-remove");
    }

    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
    $containerCards.appendChild($fragment);
  };

  const getDataPokemon = (async () => {
    try {
      for (let id = 1; id <= 150; id++) {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
          pokemon = await res.data;

        printCardPokemon(pokemon);
      }
    } catch (err) {
      console.log(err);
    }
  })();
}
