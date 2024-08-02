import style from './SectionCard.module.scss'
import { useFetch} from '../../../hooks/useFetch'
import { PopapPokemons } from '../../molecules/PopapPokemons/PopapPokemons'
import { ChangeEvent, useState } from 'react';
import { Pokemon, PokemonResponseAPI, ReturnResult } from '../../../models/Pokemons';
import SearchBar from '../../molecules/SearchBar/SearchBar';



 interface useFertchResults {
  data:PokemonResponseAPI | null;
  isLoading:boolean;
 }
export const SectionCard = () => {

  const [offset, setOffSet] = useState(0);
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [addPokemon , setAddPokemon] = useState<ReturnResult>()
  const [search, setSearch]= useState('')


   const pokeUrl = ('https://pokeapi.co/api/v2/pokemon')
   const {data, isLoading}: useFertchResults = useFetch<Pokemon>(`${pokeUrl}?limit=12&offset=${offset}`)
   const {data: AllPokemons, isLoading: charge}: useFertchResults = useFetch<Pokemon>(`${pokeUrl}?limit=10000&offset=0}`)

  

   const getAllPokemons = AllPokemons?.results.map((item)=> ({
    name:item.name,
    id:item.url.split('/').at(-2) as string
    
   }));
   

   const getPokemon = data?.results.map((item)=> ({
    name:item.name,
    id:item.url.split('/').at(-2) as string
    
   }))
   
   const handlePopup = (id:string)=> {
    const pokemon = !search? getPokemon?.find( pokemon => pokemon.id === id ) : getAllPokemons?.find( pokemon => pokemon.id === id );
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



   const searchInput = (event:ChangeEvent<HTMLInputElement>) => {

      setSearch(event.target.value)
   }

   const pokemonsFiltered = AllPokemons?.results.filter((dato)=> dato.name.toLocaleLowerCase().startsWith(search)).map((poke)=> ({
    name:poke.name,
    id:poke.url.split('/').at(-2)!
   }))

  return (

    <>
      <input type='text' placeholder='hold me' value={search} onChange={searchInput} name='search' />
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


