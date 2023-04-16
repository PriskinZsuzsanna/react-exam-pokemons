import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png';
import styled from 'styled-components';

const ImgDiv = styled.div`
    width: 90%;
    margin-inline: auto;
    max-width: 400px;
 `

const Img = styled.img`
    max-width: 100%;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 600px) {
        flex-direction: column
    }
`

const Home = () => {
    return (
        <div className='home container'>
            <ImgDiv>
                <Img src={Logo} alt="logo" className='home-logo' />
            </ImgDiv>

            <Ul>
                <li>
                    <Link to="/pokemons" className='btn'>Összes pokémon</Link>
                </li>
                <li>
                    <Link to="/pokemon" className='btn'>Pokémon keresése</Link>
                </li>
            </Ul >

        </div >
    )
}

export default Home
