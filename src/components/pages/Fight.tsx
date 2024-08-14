import { useParams } from "react-router-dom";
import { MainLayout } from "../molecules/MainContainer/MainContainer";
import style from "../pages/FightPage.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { ResponsePokemon } from "../../models/ResponsePokemon";
import { useEffect, useState } from "react";
import { PokemonFight } from "../molecules/PokemonFight/PokemonFight";
import { PopPapFight } from "../molecules/PopPapFight/PopPapFight";

interface pokemonId {
  id: number;
  base_experience: number;
  name: string;
}

export const Fight = () => {
  const { id } = useParams();

  const [randomPokemonId, setRandomPokemonId] = useState<number | null>(null);
  const [randomPokemonData, setRandomPokemonData] = useState<pokemonId | null>(
    null
  );
  const [userPokemonData, setUserPokemonData] = useState<pokemonId | null>(
    null
  );
  const [resultBattle, setResultBattle] = useState<string | null>(null);

  const randomNumber = Math.floor(Math.random() * 1000);

  useEffect(() => {
    const id = randomNumber;
    setRandomPokemonId(id);
  }, []);

  const { data: userPokemon } = useFetch<ResponsePokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  const { data: randomPokemon } = useFetch<ResponsePokemon>(
    `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
  );

  useEffect(() => {
    if (randomPokemon) {
      setRandomPokemonData(randomPokemon);
    }
  }, [randomPokemon]);

  useEffect(() => {
    if (userPokemon) {
      setUserPokemonData(userPokemon);
    }
  }, [userPokemon]);

  useEffect(() => {
    if (userPokemonData && randomPokemonData) {
      const userExperience = userPokemonData.base_experience;
      const randomExperience = randomPokemonData.base_experience;

      setTimeout(() => {
        if (userExperience > randomExperience) {
          setResultBattle("YOU WIN !!");
        } else {
          setResultBattle("YOU LOSE !!");
        }
      }, 4000);
    }
  }, [userPokemonData, randomPokemonData]);

  return (
    <>
      <MainLayout className={style.battleMod}>
        {randomPokemonData && (
          <PokemonFight
            className={style.containerRandom}
            imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${randomPokemonData?.id}.gif`}
            name={randomPokemonData?.name}
            experience={randomPokemonData.base_experience}
          />
        )}

        <PokemonFight
          className={style.containerUser}
          imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/${userPokemon?.id}.gif`}
          name={userPokemon?.name}
          experience={userPokemon?.base_experience}
        />

        {resultBattle ? <PopPapFight result={resultBattle} /> : <p style={{margin:'0', padding:'0'}}>Waiting</p>}
      </MainLayout>
    </>
  );
};
