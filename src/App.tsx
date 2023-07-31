import FilterSection from './components/FilterSection/FilterSection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

import { useEffect, useState } from 'react';
import { Pokemon } from './components/types/Pokemon';
import Pokedex from './components/Pokedex/Pokedex';
import { fetchPokemonList } from './api/fetchPokemonList';

function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      setPokemonList(await fetchPokemonList(1));
      console.log('lista');
      console.log(pokemonList);
    })();
  }, []);

  /* let data;
  async function setData() {
    data = await getPokemonList(1);
    console.log('u funkciji');
    console.log(data);
  } */

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <FilterSection></FilterSection>
      <Pokedex pokemonList={pokemonList}></Pokedex>
    </>
  );
}

export default App;
