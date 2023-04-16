import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Logo from '../assets/logo.png';
import SinglePokemon from '../components/SinglePokemon';
import styled from 'styled-components';
import './Pokemon.css'

const ImgDiv = styled.div`
    width: 90%;
    margin-inline: auto;
    max-width: 400px;
 `

const Img = styled.img`
    max-width: 100%;
`

const Input = styled.input`
    padding: .5rem 1rem;
    border: none;
    outline: none;
    background: transparent;
    border-radius: 15px;
    width: 80%;
    margin-inline: auto;
    max-width: 500px;
    box-shadow: 1px 2px 7px  #fefefeb3;
    color: #fefefeb3;
    font-size: 1.2rem;

    @media(max-width: 600px) {
        font-size: 1rem;
        width: 90%;
    }
`

const ButtonsDiv = styled.div`
    bottom: 3rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 4rem;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const Pokemon = ({ names }) => {

    const [filteredName, setFilteredName] = useState([])
    const [images, setImages] = useState({})
    const [name, setName] = useState("")
    const [pokemon, setPokemon] = useState({})
    const [inputValue, setInputValue] = useState("")
    const [fetched, setFetched] = useState(false)
    const [transition, setTransition] = useState(false)


    useEffect(() => {
        let result = names.filter(name => {
            return (name.toLowerCase() === inputValue.toLowerCase())
        })
        setFilteredName(result)

    }, [inputValue])

    useEffect(() => {
        console.log(inputValue)
        console.log(names)
        console.log(filteredName)
    }, [filteredName])

    useEffect(() => {
        setTimeout(() => {
            if (filteredName.length > 0) {
                fetchPokemon()
                setTransition(false)
                setFetched(true)
            } else {
                setTransition(true)

            }
        }, 500)

    }, [filteredName])



    const fetchPokemon = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${filteredName[0]}`);
        const data = response.data
        console.log(data)
        setPokemon(data)
        setImages(data.sprites)
        setName(data.name)
        setFetched(true)
    }


    let navigate = useNavigate()

    return (
        <div className='pokemon container pokemon-fade-in'>

            <ImgDiv>
                <Link to="/">
                    <Img src={Logo} alt="logo" />
                </Link>
            </ImgDiv>
            <Input type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={'Keress 1281 pokémonunk közül...'}
            />

            {
                fetched &&
                <SinglePokemon
                    images={images}
                    name={name}
                    transition={transition}
                />
            }
            <ButtonsDiv>
                <button className='btn' onClick={() => navigate("/")}>Vissza a Kezdőoldalra</button>
                <button className='btn' onClick={() => navigate("/pokemons")}>Összes Pokemon</button>
            </ButtonsDiv>

        </div>
    )
}

export default Pokemon
