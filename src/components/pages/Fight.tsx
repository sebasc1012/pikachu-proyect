import { useParams } from "react-router-dom";
import { MainLayout } from "../atoms/MainContainer/MainContainer";
import style from "../pages/FightPage.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { ResponsePokemon } from "../../models/ResponsePokemon";
import { useEffect, useState } from "react";
import { PokemonFight } from "../molecules/PokemonFight/PokemonFight";
import { PopPapFight } from "../molecules/PopPapFight/PopPapFight";

interface pokemonId{
  id:number
  base_experience:number
  name:string
}

export const Fight = () => {

  const { id } =  useParams();

 

  const [randomPokemonId, setRandomPokemonId] = useState<number | null >(null)
  const [randomPokemonData, setRandomPokemonData] = useState<pokemonId | null>(null)
  const [userPokemonData, setUserPokemonData] = useState<pokemonId | null >(null)
  const [resultBattle, setResultBattle] = useState <string | null>(null)


  const randomNumber = Math.floor((Math.random() * 1000 )) 

  useEffect(() => {
    
     const id = randomNumber
     setRandomPokemonId(id)
  }, [])
  
    const { data:userPokemon } = useFetch<ResponsePokemon>( `https://pokeapi.co/api/v2/pokemon/${id}`);
   const {data:randomPokemon}= useFetch<ResponsePokemon> (`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
  );


  useEffect(()=>{
    if (randomPokemon) {
      setRandomPokemonData(randomPokemon)
    }
  }, [randomPokemon])

  useEffect(()=> {
     if (userPokemon){
      setUserPokemonData(userPokemon)
     }
  }, [userPokemon]);


  useEffect(()=>{
    if ( userPokemonData && randomPokemonData) {
      const userExperience = userPokemonData.base_experience;
      const randomExperience = randomPokemonData.base_experience;

      if (userExperience > randomExperience) {
        setResultBattle('you win')
      } if (userExperience < randomExperience){
        setResultBattle('you lose')
      }
    }
  }, [userPokemonData, randomPokemonData])

  

  return (
    <>
      <MainLayout className={style.battleMod}>
    
      <PokemonFight 
          imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${userPokemon?.id}.svg`}
          name={userPokemon?.name}/>
        {
          randomPokemonData && (
              <PokemonFight 
                imgUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomPokemonData?.id}.svg`}
                name={randomPokemonData?.name}
              />
          )
        }

        {
        resultBattle ? <PopPapFight result={resultBattle}/> : <p>Waiting</p>
        }
     
      </MainLayout>
    </>
  );
};
