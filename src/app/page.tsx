import { getPokemons } from "@/actions/pokemon";
import { Pokemon } from "@/types/pokemon";
import { Button } from "@/components/ui/button";
import { PokeItems } from "@/components/poke-items";

export default async function Page() {
  const { pokemons, totalNum } = await getPokemons();

  return (
    <div>
      {pokemons.length > 0 ? (
        <>
          <p className="text-center mb-6">{totalNum} Pokémons</p>
          <div className="flex flex-wrap justify-center">
            {pokemons.map((pokemon: Pokemon) => (
              <PokeItems key={pokemon.id} pokeData={pokemon} />
            ))}
          </div>
        </>
      ) : (
        <p className="border rounded-md px-4 py-2 bg-muted text-muted-foreground">There are no Pokémon</p>
      )}
      <div className="flex gap-2 justify-center mt-6">
        <Button variant="outline">Back</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
}
