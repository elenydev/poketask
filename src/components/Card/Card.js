import React from 'react'
import styled from 'styled-components'

const CardItem= styled.div`
display: flex;
align-content: center;
justify-content: center;
background-color: white;;
flex-wrap: wrap;
padding: 10px 15px;
transition: 0.2s ease-in;
    &:hover{
        transform: scale(1.05)
    }
`
const CardImg = styled.div`
display: flex;

`
const CardName = styled.h3`
font-weight: bold;
color: black;
width: 100%;
text-align: center;
font-size: 1.4em;
padding: 5px 0;
`
const CardType = styled.p`
display: block;
padding: 10px 5px;
font-size: 1.5em;
`
const CardAbilities = styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
align-content: center;
justify-content: center;
font-size: 0.7em;
`
const CardSubheader = styled.h4`
display: block;
width: 100%;
text-align: center;
font-weight: 700;
`
const CardAbility = styled.p`
display: block;
padding: 5px;
`

function Card({pokemon}) {
    return (
        <CardItem>
            <CardImg><img src={pokemon.sprites.front_default} alt={pokemon.name} /></CardImg>
            <CardName>{pokemon.name}</CardName>
            <CardSubheader>Type: </CardSubheader>
            {pokemon.types.map( (type, key) =>{
                return <CardType key={key}>{type.type.name}</CardType>
            })
            }
            <CardSubheader>Abilities: </CardSubheader>
            <CardAbilities>
            {pokemon.abilities.map( (ability, key) =>{
                return <CardAbility key={key}>{ability.ability.name}</CardAbility>
            })}
            </CardAbilities>
            
        </CardItem>
    )
}

export default Card