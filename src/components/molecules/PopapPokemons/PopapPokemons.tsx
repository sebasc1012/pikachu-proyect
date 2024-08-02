import { useFetch } from "../../../hooks/useFetch";
import { ReturnResult } from "../../../models/Pokemons"
import { ResponsePokemon } from "../../../models/ResponsePokemon";

interface Props {
  pokemon: ReturnResult;
  setShowPopup: () => void;
}


export const PopapPokemons = ({pokemon, setShowPopup}:Props) => {

 const {data, isLoading} = useFetch<ResponsePokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)

 const getAbilities = data?.abilities.map((item)=> ({
  ability:item.ability.name
 }))
 const getMoves = data?.moves.map((item)=>({
  moves:item.move.name
 }) ).filter((pokemon, index) =>  index < 3);

 if (isLoading) return <p>....Loading</p>;

  return (
    <section>
      <button onClick={setShowPopup}>X</button>
      <h1> { pokemon.name } </h1>
      <h4>{data?.height}</h4>
      <p>{data?.base_experience}</p>

      {
        getAbilities?.map((abi)=>(
          <p key={`${pokemon.name}+${pokemon.id}`}>{abi.ability}</p>
        ))
      }

      {
         getMoves?.map((sec)=> (
          <p key={pokemon.id}>{sec.moves}</p>
        ))
      }
      
    </section>
  )
}


