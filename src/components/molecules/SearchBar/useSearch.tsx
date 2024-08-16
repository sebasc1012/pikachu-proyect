import { useMemo } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Pokemon, PokemonResponseAPI } from "../../../models/Pokemons";
import { urlDefault } from "../../../Constant";

interface useFetchResults {
  data: PokemonResponseAPI | null;
  isLoading: boolean;
}

export const useSearch = (debounceInput: string) => {
  const { data, isLoading }: useFetchResults = useFetch<Pokemon>(
    `${urlDefault}?limit=10000&offset=0}`
  );


  const pokemonsFiltered = useMemo(() => {
    const allPokemons = data?.results.map((item) => {
      const urlSegment = item.url.split('/');
      const id = urlSegment[urlSegment.length - 2];
      return{
        name:item.name,
        id : id ?? '',
      }});
    

    return allPokemons?.filter((dato) =>
      dato.name.toLocaleLowerCase().startsWith(debounceInput)
    );
  }, [debounceInput]);

  return {
    pokemonsFiltered,
    isLoading
  };
};

