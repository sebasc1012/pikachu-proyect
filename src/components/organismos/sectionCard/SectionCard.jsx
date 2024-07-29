import React from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import style from '../sectionCard/SectionCard.module.scss'

export const SectionCard = () => {

   const {data, isLoading, hasError}= useFetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')

   const getPokemon = data?.results.map((item)=> ({
    name:item.name,
    id:item.url.split('/').at(-2)
   }))
   console.log(getPokemon);


   if (isLoading) return <p>....Cargando</p>;

  return (
    <>
      <h1>prueba fetch</h1>
      <section className={style.sectionGrid}>
      {
        getPokemon.map((pokemon)=> (
            <div className={style.gridPokemon} key={pokemon.id}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}/>
                <p>{pokemon.name}</p>
            </div>
        ))
      }

      </section>
    
    </>
  )
}


