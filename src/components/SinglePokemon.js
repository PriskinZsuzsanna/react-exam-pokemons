import React, { useState } from 'react'
import styled from 'styled-components';
import './SinglePokemon.css'

const SinglePokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 4rem;
    border-radius: 50px 0;
    box-shadow: 1px 2px 7px  #fefefeb3;
    text-align: center;
    color: #fefefeb3;
    position: relative;
`

const ImgDiv = styled.div`
    width: 100%;
    margin-inline: auto;
    max-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
 `

const Img = styled.img`
    max-width: 100%;
    border-radius: 0 30px;
    box-shadow: 1px 2px 7px  #fefefeb3;
    cursor: pointer;
`

const H2 = styled.h2`
    position: absolute;
    bottom: .8rem;
`

const Tab = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    box-shadow: 1px 2px 7px  #fefefeb3;
    cursor: pointer;
`

const TabImg = styled.img`
    max-width: 100%;
`




const SinglePokemon = ({ images, name, transition }) => {

    const [direction, setDirection] = useState(true)

    return (
        <SinglePokemonContainer className={transition ? 'fade-out single-pokemon' : 'single-pokemon'}>
            <Tab className='tab'>
                <TabImg src={direction ? images.back_default : images.front_default} onClick={() => setDirection(!direction)} alt='pokemon-mini' />
            </Tab>
            <ImgDiv className='img-div'>
                <Img src={direction ? images.front_default : images.back_default} onClick={() => setDirection(!direction)} alt="pokemon-big" />
            </ImgDiv>
            <H2>{name}</H2>
        </SinglePokemonContainer>
    )
}

export default SinglePokemon
