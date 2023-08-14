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
  const [loading, setLoading] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');

  /*useEffect(() => {
    (async () => {
      setPokemonList(await fetchPokemonList(1));
    })();
  }, []);
*/

  const { isFetching, data: pokemonList } = useQuery({
    queryKey: ['pokemonList', typeFilter],
    queryFn: async () => fetchPokemonList(1),
    select: (data) => {
      if (typeFilter.length > 0)
        return data.filter((item) =>
          item.types.some((type) => type.type.name === typeFilter)
        );
      else return data;
    },
  });

  /*   const beautyProducts = temp1.filter((product) =>
    product.categories.some((cat) => cat.id === 43)
  ); */

  console.log(typeFilter);

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
      <FilterSection setTypeFilter={setTypeFilter}></FilterSection>
      {pokemonList && (
        <Pokedex
          isFetching={isFetching}
          setLoading={setLoading}
          pokemonList={pokemonList}
          setModal={setModal}
          setPokemonData={setPokemonData}
        ></Pokedex>
      )}
    </>
  );
}

export default App;
