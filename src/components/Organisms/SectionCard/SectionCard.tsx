import style from "./SectionCard.module.scss";
import { useFetch } from "../../../hooks/useFetch";
import { PopapPokemons } from "../../molecules/PopapPokemons/PopapPokemons";
import { useEffect, useMemo, useState } from "react";
import {
  Pokemon,
  PokemonResponseAPI,
  ReturnResult,
} from "../../../models/Pokemons";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { useSearch } from "../../molecules/SearchBar/useSearch";
import { urlDefault } from "../../../Constant";


interface UseFetchResults {
  data: PokemonResponseAPI | null;
  isLoading: boolean;
}
export const SectionCard = () => {
  const [offset, setOffSet] = useState(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [addPokemon, setAddPokemon] = useState<ReturnResult>();
  const [search, setSearch] = useState("");
  const [debounceInput, setDebounceInput] = useState("");
  const { pokemonsFiltered } = useSearch(debounceInput);

  const { data, isLoading }: UseFetchResults = useFetch<Pokemon>(
    `${urlDefault}?limit=12&offset=${offset}`
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

  const handlePopup = (id: string) => {
    const pokemon = !search
      ? pokemonMemo?.find((pokemon) => pokemon.id === id)
      : pokemonsFiltered?.find((pokemon) => pokemon.id === id);
    if (!pokemon) return;
    setAddPokemon(pokemon);
    setShowPopup(true);
  };

  const handlePaginationMore = () => {
    setOffSet(offset + 12);
  };
  const handlePaginationLess = () => {
    setOffSet(offset - 12);
  };

  useEffect(() => {
    const delayInputTimeOut = setTimeout(() => {
      setDebounceInput(search);
    }, 400);
    return () => clearTimeout(delayInputTimeOut);
  }, [search, 400]);

  return (
    <>
      {isLoading ? (
        <section role="containerRol" className={style.loadingContainer}>
          <div className={style.loadingSection}></div>
        </section>
      ) : (
        <>
          <div className={style.image_Container}>
            <img
              className={style.image}
              src="/img/LogoSecondPage.png"
              alt="logo"
            />
          </div>
          <div className={style.inputSection}>
            <SearchBar
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search your favorite"
            />
          </div>
          <section role="cardRole" className={style.sectionGrid}>
            {pokemonMemo?.length && pokemonsFiltered?.length === 0 ? (
             <div className={style.notFoundContainer}>
               <h5  className={style.notFoundTittle}>Pokemon not found</h5>
               <div >
                <img className={style.imageNotFound} src="/img/pikachu-pokemon.gif" alt="pokemon not found"/>
               </div>
             </div>
            ) : !search ? (
              pokemonMemo?.map((pokemon) => (
                <div
                  className={style.gridPokemon}
                  onClick={() => handlePopup(pokemon.id)}
                  key={`poke_name${pokemon.id}`}
                >
                  <div className={style.imgContainer}>
                    <img
                      className={style.imgPokemon}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                      alt="pokemon chosen"
                    />
                  </div>
                  <p className={style.pokemonName}>{pokemon.name}</p>
                </div>
              ))
            ) : (
              pokemonsFiltered?.map((pokemon) => (
                <div
                  className={style.gridPokemon}
                  onClick={() => handlePopup(pokemon.id)}
                  key={`poke_name${pokemon.id}`}
                >
                  <div className={style.imgContainer}>
                    <img
                      className={style.imgPokemon}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                      alt="pokemon chosen"
                    />
                  </div>
                  <p className={style.pokemonName}>{pokemon.name}</p>
                </div>
              ))
            )}
          </section>
          <div className={style.buttonContainer}>
            <button
              onClick={() => handlePaginationLess()}
              disabled={offset === 0}
              className={style.buttonPage}
            >
              Back
            </button>
            <button
              onClick={() => handlePaginationMore()}
              className={style.buttonPage}
            >
              Next
            </button>
          </div>
        </>
      )}

      {showPopup && (
        <PopapPokemons
          pokemon={addPokemon!}
          setShowPopup={() => setShowPopup(!showPopup)}
        />
      )}
    </>
  );
};
