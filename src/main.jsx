import React from 'react'
import ReactDOM from 'react-dom/client'
import { Characters } from './characters.jsx'
import { PokemonApp } from './Landing-page/pokemonApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonApp></PokemonApp>
  </React.StrictMode>,
)
