import { useMemo, useState } from "react";
import { useFetch } from "./useFetch";
import { Pokemon, PokemonResponseAPI } from "../models/Pokemons";

interface useFertchResults {
  data: PokemonResponseAPI | null;
  isLoading: boolean;
}

export const useSearch = (search: string) => {
  const { data, isLoading }: useFertchResults = useFetch<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=0}`
  );
  
  const pokemonsFiltered = useMemo(() => {
    const allPokemons = data?.results.map((item) => ({
      name: item.name,
      id: item.url.split("/").at(-2) as string,
    }));

    return allPokemons?.filter((dato) =>
      dato.name.toLocaleLowerCase().startsWith(search)
    );
  }, [search]);

  return {
    pokemonsFiltered,
  };
};
