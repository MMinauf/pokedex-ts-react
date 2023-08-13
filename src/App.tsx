import FilterSection from './components/FilterSection/FilterSection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

import { useEffect, useState } from 'react';
import { Pokemon } from './components/types/Pokemon';
import Pokedex from './components/Pokedex/Pokedex';
import { fetchPokemonList } from './api/fetchPokemonList';
import PokemonModal from './components/PokemonModal/PokemonModal';
import { useQuery, Query, useQueryClient } from '@tanstack/react-query';
import Spinner from './components/Spinner/Spinner';

function App() {
  //const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [pokemonData, setPokemonData] = useState<Pokemon>();

  /*useEffect(() => {
    (async () => {
      setPokemonList(await fetchPokemonList(1));
    })();
  }, []);
*/

  const { isFetching, data: pokemonList } = useQuery({
    queryKey: ['pokemonList'],
    queryFn: async () => fetchPokemonList(1),
  });

  return (
    <>
      {modal && pokemonData && (
        <PokemonModal pokemon={pokemonData} setModal={setModal}></PokemonModal>
      )}
      <Header></Header>
      <HeroSection
        setPokemonData={setPokemonData}
        setModal={setModal}
      ></HeroSection>
      <FilterSection></FilterSection>
      {pokemonList && (
        <Pokedex
          isFetching={isFetching}
          pokemonList={pokemonList}
          setModal={setModal}
          setPokemonData={setPokemonData}
        ></Pokedex>
      )}
    </>
  );
}

export default App;
