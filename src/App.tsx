import FilterSection from './components/FilterSection/FilterSection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import { getPokemonList } from './api/fetchPokemonList';

function App() {
  let data;
  async function setData() {
    data = await getPokemonList(1);
    console.log('u funkciji');
    console.log(data);
  }

  setData();

  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <FilterSection></FilterSection>
    </>
  );
}

export default App;
