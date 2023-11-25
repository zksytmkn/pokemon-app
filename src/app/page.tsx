import { getPokemons } from "@/actions/pokemon";
import { Pokemon } from "@/types/pokemon";

export default async function Page() {
  const pokemons = await getPokemons();

  return (
    <div>
      {pokemons.length > 0 ? (
        <ul className="divide-y">
          {pokemons.map((pokemon: Pokemon) => {
            return <li key={pokemon.id}>{pokemon.name}</li>;
          })}
        </ul>
      ) : (
        <p className="border rounded-md px-4 py-2 bg-muted text-muted-foreground">There are no Pokémon</p>
      )}
    </div>
  );
}
