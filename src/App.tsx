import { useEffect, useState } from "react"
import Navbar from '@/components/Navbar/Navbar'
import CardPokemon from '@/components/CardPokemon/CardPokemon'

import axios from 'axios'

type Pokemon = {
  nomePokemon: string,
  imagemPokemon: string
}

function App() {

  const [ pokemonObject, setPokemonObject ] = useState<Pokemon>()

  useEffect(() => {
      const FetchingData = async () => {
        
        const fetchDatas = await axios("https://pokeapi.co/api/v2/pokemon/squirtle").then((response) => {return response.data})
        setPokemonObject({
          nomePokemon: fetchDatas.name,
          imagemPokemon: fetchDatas.sprites.other.dream_world.front_default
        })
      }
      
      FetchingData()
  }, [])

  return (
    <>
      <div className="p-8 mx-auto w-full h-screen bg-slate-800">
        <Navbar />
          <div className="initialPage text-white flex justify-around items-center mt-10 h-5/6">
            <div className="mainTitle flex flex-col">
              <p className="text-3xl font-light">project</p>
              <h1 className="text-8xl font-bold">Pokemon</h1>
              <span className="text-sm font-extralight italic">A small project about these cute creatures</span>
             </div>
            <CardPokemon namePokemon={pokemonObject?.nomePokemon} imagePokemon={pokemonObject?.imagemPokemon}/>
          </div>
      </div>
    </>
  )
}

export default App
