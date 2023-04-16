import React from 'react'
import styled from 'styled-components'
import './PokemonCard.css'

const Pokemoncard = styled.div`
    max-width: 100%;
    margin-inline: auto;
    padding: 2rem;
    box-shadow: 1px 2px 7px  #fefefeb3;
    text-align: right;
    
    @media (max-width: 600px) {
      padding: 1rem;
      font-size: 0.6rem;
      word-break: break-all;
    }
`

const PokemonCard = ({name, url}) => {
  return (
    <Pokemoncard className='pokemon-card'>
      <h2>{name}</h2>
      <p><a href={url} target='_blank'>{url}</a></p>
    </Pokemoncard>
  )
}

export default PokemonCard
