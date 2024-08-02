import style from './SectionCard.module.scss'
import { useFetch} from '../../../hooks/useFetch'
import { PopapPokemons } from '../../molecules/PopapPokemons/PopapPokemons'
import { useState } from 'react';
import { Pokemon, PokemonResponseAPI, ReturnResult } from '../../../models/Pokemons';
import {SearchBar} from '../../molecules/SearchBar/SearchBar';
import { useSearch } from '../../../hooks/useSearch';



 interface useFertchResults {
  data:PokemonResponseAPI | null;
  isLoading:boolean;
 }
export const SectionCard = () => {

  const [offset, setOffSet] = useState(0);
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [addPokemon , setAddPokemon] = useState<ReturnResult>()
  const [search, setSearch] = useState("")

  const {pokemonsFiltered}=useSearch(search)



   const pokeUrl = ('https://pokeapi.co/api/v2/pokemon')
   const {data, isLoading}: useFertchResults = useFetch<Pokemon>(`${pokeUrl}?limit=12&offset=${offset}`)

  
   const getPokemon = data?.results.map((item)=> ({
    name:item.name,
    id:item.url.split('/').at(-2) as string
    
   }))
   
   const handlePopup = (id:string)=> {
    const pokemon = !search? getPokemon?.find( pokemon => pokemon.id === id ) : pokemonsFiltered?.find( pokemon => pokemon.id === id );
    if (!pokemon) return;
    setAddPokemon(pokemon)
    setShowPopup(!showPopup)
   }
   

   const handlePaginationMore = () => {
    setOffSet(offset + 12)
   }
   const handlePaginationLess =()=> {
    setOffSet( offset -12)
   }

   if (isLoading) return <p>....Loading</p>;


  return (

    <>
         <SearchBar value={search} onChange={(event)=> setSearch(event.target.value)} />
        <div className={style.image_Container}>
             <img className={style.image} src='src/assets/img/LogoSecondPage.png' alt='logo'/>
        </div>
        

      <section className={style.sectionGrid}>
      {
        !search ? (
          getPokemon?.map((pokemon)=> (
              <div className={style.gridPokemon} onClick={() => handlePopup(pokemon.id)}  key={pokemon.id}>
                  <div className={style.imgContainer}>
                      <img className={style.imgPokemon} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt='pokemon chosen'/>
                  </div>
                  <p className={style.pokemonName}>{pokemon.name}</p>
                  
              </div>
          ))
        ) : (
          pokemonsFiltered?.map((pokemon)=> (
            <div className={style.gridPokemon} onClick={() => handlePopup(pokemon.id)}  key={pokemon.id}>
                <div className={style.imgContainer}>
                    <img className={style.imgPokemon} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt='pokemon chosen'/>
                </div>
                <p className={style.pokemonName}>{pokemon.name}</p>
                
            </div>
        ))
      )
      }


      </section>
      <button onClick={()=>handlePaginationLess()} disabled= {offset === 0 } className={style.buttonPage}>Back</button>
      <button onClick={()=>handlePaginationMore()} className={style.buttonPage}>Next</button>


      {
        showPopup && <PopapPokemons pokemon={addPokemon!} setShowPopup={()=> setShowPopup(!showPopup)}/>

      }
    
    </>
  )
}


