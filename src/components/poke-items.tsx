"use client";

import { useState, useEffect } from "react";
import { Pokemon } from "@/types/pokemon";
import { PokeItem } from "@/components/poke-item";
import { Button } from "@/components/ui/button";

export function PokeItems(props: { initialPokemons: Pokemon[] }) {
  const { initialPokemons } = props;
  const [pokemons, setPokemons] = useState<Pokemon[]>(initialPokemons.slice(0, 20));
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(493 / 20);

  useEffect(() => {
    const start = (currentPage - 1) * 20;
    const end = start + 20;
    setPokemons(initialPokemons.slice(start, end));
  }, [currentPage]);

  return (
    <div>
      {pokemons.length > 0 ? (
        <>
          <p className="text-center mb-6">493 Pokémons Generation IV</p>
          <div className="flex flex-wrap justify-center">
            {pokemons.map((pokemon: Pokemon) => (
              <PokeItem key={pokemon.id} pokeData={pokemon} />
            ))}
          </div>
        </>
      ) : (
        <p className="border rounded-md px-4 py-2 bg-muted text-muted-foreground">There are no Pokémon</p>
      )}
      <div className="flex gap-2 justify-center mt-6">
        <Button variant="outline" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Back
        </Button>
        <Button variant="outline" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === lastPage}>
          Next
        </Button>
      </div>
    </div>
  );
}
