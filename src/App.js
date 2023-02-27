import './App.css';
import { PokemonList } from './pages/pokemonList.page.jsx';
import { SinglePokemonPage } from './pages/singlePokemon.page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />}/>
          <Route path=":name" element={<SinglePokemonPage />} />
        </Routes>
      </BrowserRouter>


   
  );
}

export default App;



//Call API that returns a list of Pokemon
//Display Pokemon on screen (name,number,type,weakness)
//Display search functionalities by nam
//Display filtering functionalities by type and weaknesses