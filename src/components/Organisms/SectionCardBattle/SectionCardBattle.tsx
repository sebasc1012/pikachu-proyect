import { useEffect, useMemo, useState } from "react";
import { useSearch } from "../../molecules/SearchBar/useSearch";
import { useFetch } from "../../../hooks/useFetch";
import {
  Pokemon,
  PokemonResponseAPI,
  ReturnResult,
} from "../../../models/Pokemons";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import style from "./SectionCardBattle.module.scss";
import { useNavigate } from "react-router-dom";
import { urlDefault } from "../../../Constant";

interface UseFetchResults {
  data: PokemonResponseAPI | null;
  isLoading: boolean;
}

export const SectionCardBattle = () => {
  const [offset, setOffSet] = useState(0);
  const [search, setSearch] = useState("");
  const [debounceInput, setDebounceInput] = useState("");
  const { pokemonsFiltered } = useSearch(debounceInput);
  const [pokemonSelected, setPokemonSelected] = useState<ReturnResult | null>(
    null
  );

  const navigate = useNavigate();
  const { data, isLoading }: UseFetchResults = useFetch<Pokemon>(
    `${urlDefault}?limit=200&offset=${offset}`
  );

  const pokemonMemo = useMemo(() => {
    const MapPokemon = data?.results.map((item) => {
      const urlSegment = item.url.split("/");
      const id = urlSegment[urlSegment.length - 2];
      return {
        name: item.name,
        id: id ?? "",
      };
    });
    return MapPokemon;
  }, [data]);

  const handlePaginationMore = () => {
    setOffSet(offset + 200);
  };

  useEffect(() => {
    const delayInputTimeOut = setTimeout(() => {
      setDebounceInput(search);
    }, 500);
    return () => clearTimeout(delayInputTimeOut);
  }, [search]);

  const pokemonToBattle = (pokemon: ReturnResult) => {
    setPokemonSelected(pokemon);
  };

  const redirectToBattle = () => {
    navigate(`/Fight/${pokemonSelected?.id}`);
  };

  return (
    <>
      {isLoading  ? (
        <section role="status" className={style.loadingContainer}>
          <div className={style.loadingSection}></div>
        </section>
      ) : (
        <>
          <header className={style.headerContainer}>
            <h1>Battle Mode!</h1>
            <h2>Chosen your warrior</h2>
          </header>
          <main className={style.characterGrid}>
            <div role="inputRole" className={style.inputContainer}>
              <SearchBar
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search pokemon"
              />
            </div>
            <section className={style.sectionBattle}>
              {pokemonMemo?.length && pokemonsFiltered?.length === 0 ? (
                <div >
                  <img
                  className={style.imgContainerNotFound}
                    src="/img/pikachu-pokemon.gif"
                    alt="pokemon not found"
                  />
                </div>
              ) : !search ? (
                pokemonMemo?.map((pokemon) => (
                  <div
                  role="grid"
                    key={`pokemon_${pokemon.id}`}
                    className={`${style.cardPokemon} ${
                      pokemonSelected?.id === pokemon.id ? style.selected : ""
                    }`}
                    onClick={() => pokemonToBattle(pokemon)}
                  >
                    <div className={style.imageContainer}>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        alt="pokemon chosen"
                      />
                    </div>
                    <p>{pokemon.name}</p>
                  </div>
                ))
              ) : (
                pokemonsFiltered?.map((pokemon) => (
                  <div
                    key={`pokemon_${pokemon.id}`}
                    className={`${style.cardPokemon} ${
                      pokemonSelected?.id === pokemon.id ? style.selected : ""
                    }`}
                    onClick={() => pokemonToBattle(pokemon)}
                  >
                    <div className={style.imageContainer}>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        alt="pokemon chosen"
                      />
                    </div>
                    <p>{pokemon.name}</p>
                  </div>
                ))
              )}
              <div className={style.buttonContainer}>
                <button onClick={() => handlePaginationMore()}>Next</button>
              </div>
            </section>
            <div className={style.buttonSelect}>
              <button
                className={style.buttonBattle}
                disabled={pokemonSelected != null ? false : true}
                onClick={redirectToBattle}
              >
                Go to Battle
              </button>
            </div>
          </main>
        </>
      )}
    </>
  );
};
