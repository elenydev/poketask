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
`
const PokeType = styled.p`
display: block;
padding: 10px 5px;
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
display: flex;
align-content: flex-start;
justify-content: center;
flex-wrap: wrap;
grid-column: 1 / -1;
`
const PokeStat = styled.li`
display: flex;
align-content: flex-start;
justify-content: center;
padding: 10px;

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
            <PokeStats>
                <PokeSubheader>Stats: </PokeSubheader>
                {pokemon.stats.map((stat, key) =>{
                    return <PokeStat key={key}>{stat.stat.name} : {stat.base_stat}</PokeStat>
                })}
            </PokeStats>
            <PokeStats>
                <PokeSubheader>Moves: </PokeSubheader>
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