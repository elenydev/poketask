import { configureStore } from '@reduxjs/toolkit'
import PokemonSlice from './pokemonSlice'
   
export default configureStore({
  reducer: {
    specificPokemon: PokemonSlice,
  },
});