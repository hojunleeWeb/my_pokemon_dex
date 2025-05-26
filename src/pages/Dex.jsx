import MOCK_DATA from "../mock";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const StyledDexDiv = styled.div`
    width: 100%;
    margin: 0 auto;
`;
const Dex = () => {
    return (
        <StyledDexDiv>
            <PokemonContext.Provider value={{ pokemons: MOCK_DATA }}>
                <PokemonList />
            </PokemonContext.Provider>
        </StyledDexDiv>
    );
};

export default Dex;
