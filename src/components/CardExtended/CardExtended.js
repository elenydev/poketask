import React from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {specificPokemon} from '../../store/pokemonSlice'
import {
    Link
  } from "react-router-dom";
import { Button } from '../Button/Button'

const Pokemon = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(100px, 1.5fr));
grid-template-rows: repeat(auto-fit, minmax(150px, 1.5fr));
width: 70%;
padding: 10px;
background-color: white;
margin: 10px auto;
grid-gap: 15px;
box-shadow: 10px -10px 50px 5px #3B4CCA;
    @media(max-width: 700px){
        width: 95%;
    }
`
const PokemonImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
grid-column: 1 / -1;

`
const PokemonName = styled.h1`
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
font-size: 1.6em;
grid-column: 1 / -1;
`
const PokeAbilities = styled.div`
display: flex;
flex-wrap: wrap;
align-content: center;
justify-content: center;
`
const PokeAbility = styled.p`
display: block;
padding: 5px;
`
const PokeSubheader = styled.h4`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
text-align: center;
font-weight: 700;
font-size: 1.3em;
`
const PokeTypes = styled.div`
display: flex;
align-content: center;
justify-content: center;
flex-wrap: wrap;
padding: 5px;
margin: 8px 0;
`
const PokeType = styled.p`
display: block;
font-size: 1.5em;
`
const PokeBaseStats = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-content: center;
flex-wrap: wrap;
grid-column: 1 / -1;
`
const PokeStats = styled.ul`
list-style: none;
grid-column: 1 / -1;
display: block;
width: 100%;
column-count: 3;
column-gap: 10px;
column-rule-style: solid;
column-rule-width: 1px;
column-rule-color: black;
column-width: 100px;
`
const PokeStat = styled.li`
text-align: center;
`
const CardExtendeed = () => {

    const { pokemon }= useSelector(specificPokemon)

    return (
        <>
        <Link to="/"><Button>Back</Button></Link>;
        { !pokemon ? <h1>Choose specific pokemon on previous page </h1> :
        
        <Pokemon>
            <PokemonImg><img src={pokemon.sprites.front_default} alt="elo"/></PokemonImg>
            <PokemonName>{pokemon.name}</PokemonName>
            <PokeBaseStats>
                <PokeTypes>
                    <PokeSubheader>Type: </PokeSubheader>
                    {pokemon.types.map( (type, key) =>{
                    return <PokeType key={key}>{type.type.name}</PokeType>
                    })}
                </PokeTypes>
                <PokeAbilities>
                    <PokeSubheader>Abilities: </PokeSubheader>
                    {pokemon.abilities.map((ability,key) => {
                        return <PokeAbility key={key}>{ability.ability.name}</PokeAbility>
                    })}
                </PokeAbilities>
                <PokeSubheader>Weight: {pokemon.weight}</PokeSubheader>
                <PokeSubheader>Height: {pokemon.height}</PokeSubheader>
                <PokeSubheader>Experience: {pokemon.base_experience}</PokeSubheader>
            </PokeBaseStats>
            <PokeSubheader style={{gridColumn: '1 / -1'}}>Stats: </PokeSubheader>
            <PokeStats>
                {pokemon.stats.map((stat, key) =>{
                    return <PokeStat key={key}>{stat.stat.name} : {stat.base_stat}</PokeStat>
                })}
            </PokeStats>
            <PokeSubheader style={{gridColumn: '1 / -1'}}>Moves: </PokeSubheader>
            <PokeStats>
                {pokemon.moves.map((move, key) =>{
                    return <PokeStat key={key}>{move.move.name}</PokeStat>
                })}
            </PokeStats>
            <Link to="/"><Button>Back</Button></Link>
        </Pokemon>
        
        } 
        
        </>  
     );
}
 
export default CardExtendeed;