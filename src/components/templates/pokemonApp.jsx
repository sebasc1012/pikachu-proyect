import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Character, Battle, Home } from '../pages'
import { HeaderBar } from '../organismos/HeaderBar/HeaderBar'


export const PokemonApp = () => {
  return (
    <>
      <HeaderBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Character' element={<Character/>}/>
            <Route path='/Batle' element= {<Battle/>}/>
        </Routes>
 
    </>
  )
}

