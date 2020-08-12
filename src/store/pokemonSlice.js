import { createSlice } from '@reduxjs/toolkit'

const Pokemonslice = createSlice({
  name: 'pokemon',
  initialState: {
    SpecificPokemon: false,
    redirect: false
  },
  reducers: {
    setPokemon: (state, action) =>{
        state.pokemon = action.payload
    },
    setRedirect: (state) =>{
      state.redirect = true;
    },
    setNotRedirect: (state) =>{
      state.redirect = false;
    }
  },
});

export default Pokemonslice.reducer
export const specificPokemon = state => state.specificPokemon;
export const {setPokemon, setRedirect, setNotRedirect} = Pokemonslice.actions;