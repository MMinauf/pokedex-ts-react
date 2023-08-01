import FilterSection from './components/FilterSection/FilterSection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

import { useEffect, useState } from 'react';
import { Pokemon } from './components/types/Pokemon';
import Pokedex from './components/Pokedex/Pokedex';
import { fetchPokemonList } from './api/fetchPokemonList';
import PokemonModal from './components/PokemonModal/PokemonModal';

function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<Pokemon>();

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
      <PokemonModal setModal={setModal}></PokemonModal>
      <Header></Header>
      <HeroSection></HeroSection>
      <FilterSection></FilterSection>
      <Pokedex pokemonList={pokemonList}></Pokedex>
    </>
  );
}

export default App;
