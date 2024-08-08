import { useEffect, useState } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { useFetch } from "../../../hooks/useFetch";
import { Pokemon, PokemonResponseAPI, ReturnResult } from "../../../models/Pokemons";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import style from './SectionCardBattle.module.scss'
import { Navigate, NavLink, useNavigate } from "react-router-dom";

interface useFertchResults {
  data: PokemonResponseAPI | null;
  isLoading: boolean;
}

export const SectionCardBattle = () => {
  const [offset, setOffSet] = useState(0);
  const [search, setSearch] = useState("");
  const [debounceInput, setDebounceInput] = useState("");
  const { pokemonsFiltered } = useSearch(debounceInput);
  const [pokemonSelected, setPokemonSelected] = useState<ReturnResult | null>(null)
  const navigate = useNavigate()

 

  const pokeUrl = "https://pokeapi.co/api/v2/pokemon";
  const { data, isLoading }: useFertchResults = useFetch<Pokemon>(
    `${pokeUrl}?limit=200&offset=${offset}`
  );

  const MapPokemon = data?.results.map((item) => ({
    name: item.name,
    id: item.url.split("/").at(-2) as string /* remove as */,
  }));

  const handlePaginationMore = () => {
    setOffSet(offset + 200);
  };

  useEffect(() => {
    const delayInputTimeOut = setTimeout(() => {
      setDebounceInput(search);
    }, 500);
    return () => clearTimeout(delayInputTimeOut);
  }, [search, 500]);

  const pokemonToBattle = (pokemon:ReturnResult) => {
    setPokemonSelected(pokemon)
  }

  const redirectToBattle = () => {
    navigate( `/Fight/${pokemonSelected?.id}` )
  }

  if (isLoading) return <p>....Loading</p>;

  return (
        <>
    <header className={style.headerContainer}>
        <h1>Battle Mode!</h1>
        <h2>Chosen your warrior</h2>
    </header>
    <main className={style.characterGrid}>
        <div className={style.inputContainer}>
            <SearchBar
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search pokemon"
            />
        </div>
        <section className={style.sectionBattle}>
        {!search
          ? MapPokemon?.map((pokemon) => (
              <div className={style.cardPokemon} onClick={()=>pokemonToBattle(pokemon)}>
                <div className={style.imageContainer}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    alt="pokemon chosen"
                  />
                </div>
                <p>{pokemon.name}</p>
              </div>
            ))
          : pokemonsFiltered?.map((pokemon) => (
              <div className={style.cardPokemon} onClick={()=>pokemonToBattle(pokemon)}>
                <div className={style.imageContainer}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    alt="pokemon chosen"
                  />
                </div>
                <p>{pokemon.name}</p>
              </div>
            ))}
            <div className={style.buttonContainer}>
                <button onClick={() => handlePaginationMore()}>Next</button>
            </div>
      </section>

            <button disabled={ pokemonSelected != null ? false : true } onClick={redirectToBattle} > Go to battle</button>

    </main>

     
      
    </>
  );
};
