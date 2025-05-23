import MOCK_DATA from "../mock";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const StyledDexDiv = styled.div`
    margin: 0 auto;
`;
const Dex = () => {
    return (
        <StyledDexDiv>
            <PokemonList pokemons={MOCK_DATA} />
        </StyledDexDiv>
    );
};

export default Dex;
