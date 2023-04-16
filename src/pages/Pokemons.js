import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard'
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

const PokemonsGrid = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-inline-auto;
`

const ButtonsDiv = styled.div`
    bottom: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-block: 1rem;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`


const Pokemons = ({pokemons}) => {


    let navigate = useNavigate()

    return (
        <div className='pokemons container'>
            <ImgDiv>
                <Link to="/">
                    <Img src={Logo} alt="logo" />
                </Link>
            </ImgDiv>
            <PokemonsGrid className="pokemons-grid">
                {pokemons.map((p, idx) => {
                    return (
                        <PokemonCard
                            key={idx}
                            name={p.name}
                            url={p.url}
                        />
                    )

                })}

            </PokemonsGrid>

            <ButtonsDiv>
                <button className='btn' onClick={() => navigate("/")}>Vissza a Kezdőoldalra</button>
                <button className='btn' onClick={() => navigate("/pokemon")}>Pokemon keresése</button>
            </ButtonsDiv>
        </div>
    )
}

export default Pokemons
