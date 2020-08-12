import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import Nav from './components/Nav/Nav'
import Card from './components/Card/Card'
import CardExtended from './components/CardExtended/CardExtended'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {setPokemon, setRedirect, setNotRedirect, specificPokemon} from './store/pokemonSlice'
import { Button } from './components/Button/Button'

const GridWrapper = styled.div`
display: grid;
width: 80%;
grid-template-columns: repeat(auto-fit, minmax(250px, 1.5fr));
margin: 0 auto;
grid-gap: 30px;
`
const Links = styled(Link)`
text-decoration: none;
color: black;
`

const Header = styled.h1`
  display: flex;
  width: 100%;
  height: 20vh;
  align-items: center;
  justify-content: center;
  background-color: #CC0000;
  color: white;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  text-shadow: 2px 1px #3B4CCA; 
  -webkit-text-stroke: 2px #3B4CCA;
`
const Search = styled.form`
display: flex;
width: 80%;
align-content: center;
justify-content: center;
margin: 20px auto;
`
const SearchInput = styled.input`
display: block;
padding: 5px;
outline: none;

`

function App() {
  
  const dispatch = useDispatch()
  const {redirect} = useSelector(specificPokemon);
  const [searchValue, setSearchValue] = useState('');
  const [currentPoks, setCurrentPoks] = useState('')
  const [prevPage, setPrevPage] = useState('')
  const [nextPage, setNextPage] = useState('')
  const [loading, setLoading] = useState(true);
  const basicUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10"
  

  useEffect( () =>{
    async function fetchData() {
    const pokemons = await fetch(basicUrl);
    const response = await pokemons.json();
    setPrevPage(response.previous);
    setNextPage(response.next);
    getPokemons(response.results)
    }
    fetchData()
  }, [])

  const getPokemons = async  (data) =>{
    let pokemonData = await Promise.all(data.map( async (pokemon) =>{
      const pokemonElement = await fetch(pokemon.url);
      const data = await pokemonElement.json();
      return data;
    })
    );
  setCurrentPoks(pokemonData);
  setLoading(false);
  } 

  const next = async () =>{
    if(!nextPage) return
    setLoading(true);
    const data = await fetch(nextPage);
    const response = await data.json();
    setPrevPage(response.previous);
    setNextPage(response.next);
    getPokemons(response.results)
  }
  const prev = async () =>{
    if(!prevPage) return
    setLoading(true);
    const data = await fetch(prevPage);
    const response = await data.json();
    setPrevPage(response.previous);
    setNextPage(response.next);
    getPokemons(response.results)
  }

  const searchPokemon = async (e) =>{
    e.preventDefault();
    const search = searchValue.toLowerCase();
    if(search === '') {
      alert('Put correct value');
      return;
    }
    try{
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const response = await data.json();
    dispatch(setPokemon(response));
    setSearchValue('');
    dispatch(setRedirect());
    }
    catch(error){
      console.log(error);
      alert('Pokemon not found')
      setSearchValue('');
      dispatch(setNotRedirect());
    }
    dispatch(setNotRedirect());
    
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        {redirect ? <Redirect to="/pokemon" /> : <Redirect to='/'/>}
        <>
          { loading ?  <Header>It's loading... </Header> : 
          <>
            <Header>Welcome in PokeDex</Header>
            <Nav next={next} prev={prev}/>
            <Search onSubmit={searchPokemon} >
              <SearchInput type="text" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
              <Button type="submit"> Search </Button>
            </Search>
            <GridWrapper>
              {currentPoks.map((pokemon, key) => {
                return <Links to='/pokemon' key={key} onClick={() => dispatch(setPokemon(pokemon))}>
                  <Card pokemon={pokemon} />
                  </Links>
              })}
            </GridWrapper>
            <Nav next={next} prev={prev}/>
          </>
          }
        </>
        </Route>
        <Route path="/pokemon" exact>
            <Header>Welcome in PokeDex</Header>
            <CardExtended />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
