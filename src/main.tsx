import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { PokemonApp } from './components/templates/pokemonApp.jsx'
import "../src/components/styles/global.scss"
import { PokemonApp } from './components/templates/pokemonApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <PokemonApp/>
      </BrowserRouter>
  </React.StrictMode>,
)
