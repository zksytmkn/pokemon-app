import { Suspense } from "react";
import { getPokemons } from "@/actions/pokemon";
import { PokeItems } from "@/components/poke-items";

export default async function Page() {
  const { pokemons } = await getPokemons();

  return (
    <Suspense fallback={<p>Loading Pokémons...</p>}>
      <PokeItems initialPokemons={pokemons} />
    </Suspense>
  );
}
