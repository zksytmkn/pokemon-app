"use server";

import { SpeciesItem } from "../types/pokemon";

export async function getPokemons() {
  const res = await fetch(`${process.env.POKEAPI_URL}`);
  const resObj = await res.json();
  const resObjResult = resObj.results;
  const pokemons = [];

  for (const pokeDataSrc of resObjResult) {
    const pokeDataRes = await fetch(`${process.env.POKEAPI_URL}/${pokeDataSrc.name}/`);
    const pokeDataResObj = await pokeDataRes.json();
    if (pokeDataResObj.species) {
      const speciesRes = await fetch(pokeDataResObj.species.url);
      const speciesResObj: SpeciesItem = await speciesRes.json();
      const flavorTextAry = speciesResObj.flavor_text_entries
        .filter((flavorText) => flavorText.language.name === "ja")
        .map((flavorText) => flavorText.flavor_text);
      const pokeType = speciesResObj.genera.length > 0 ? speciesResObj.genera[0].genus : null;

      pokemons.push({
        id: pokeDataResObj.id,
        name: speciesResObj.names[0].name,
        height: pokeDataResObj.height,
        weight: pokeDataResObj.weight,
        img: pokeDataResObj.sprites?.front_default,
        officialImg: pokeDataResObj.sprites?.other["official-artwork"].front_default,
        type: pokeType,
        flavor_text: flavorTextAry[0],
      });
    }
  }
  return pokemons;
}
