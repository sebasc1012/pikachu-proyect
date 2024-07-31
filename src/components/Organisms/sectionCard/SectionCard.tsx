import style from './SectionCard.module.scss'
import { useFetch} from '../../../hooks/useFetch'
import { PopapPokemons } from '../../molecules/PopapPokemons/PopapPokemons'
import { useState } from 'react'

interface Pokemon {
  name:string;
  id:string
 }
 interface PokemonResponseAPI {
  results:{
    name:string;
    url:string;
  }[];
 }
 interface useFertchResults {
  data:PokemonResponseAPI | null;
  isLoading:boolean;
 }
export const SectionCard = () => {

   const pokeUrl = ('https://pokeapi.co/api/v2/pokemon')
   const {data, isLoading}: useFertchResults = useFetch(`${pokeUrl}?limit=12&offset=0`)
   const [showPopap, setShowPopat] = useState<boolean>(false)


   const getPokemon: Pokemon[] = data?.results.map((item)=> ({
    name:item.name,
    id:item.url.split('/').at(-2)
    
   }))
   


   const handlePopup = (id:string):Pokemon | undefined => {
    const pokemon = getPokemon.find( pokemon => pokemon.id === id );
    return pokemon;
   }

   if (isLoading) return <p>....Loading</p>;

  return (

    <>
        <div className={style.image_Container}>
             <img className={style.image} src='public/img/LogoSegundaPagina.png' alt='logo'/>
        </div>
        

      <section className={style.sectionGrid}>
      {
        getPokemon.map((pokemon)=> (
            <div className={style.gridPokemon} onClick={() => handlePopup(pokemon.id)}  key={pokemon.id}>
                <div className={style.imgContainer}>
                    <img className={style.imgPokemon} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt='pokemon chosen'/>
                </div>
                <p className={style.pokemonName}>{pokemon.name}</p>
                
            </div>
        ))
      }

      </section>


      {
        showPopap && <PopapPokemons/>

      }
    
    </>
  )
}


