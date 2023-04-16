import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios'

import './App.css';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';





function App() {
  
  const [pokemons, setPokemons] = useState([])
  const [allPokemons, setAllPokemons] = useState([])
  const [names, setNames] = useState([])


  useEffect(() => {
      getPokemons()
      getAllPokemons()
  }, [])

  useEffect(() => {
    allPokemons.map(pokemon => {
        const newName = pokemon.name
        setNames(names => [...names, newName])
    })
}, [allPokemons])

  const getPokemons = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/")

          .then(res => setPokemons(res.data.results))
          .catch(err => console.log(err))
  }

  const getAllPokemons = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.")

          .then(res => setAllPokemons(res.data.results))
          .catch(err => console.log(err))
  }
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons pokemons={pokemons} />} />
          <Route path="/pokemon" element={<Pokemon  names={names}/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
