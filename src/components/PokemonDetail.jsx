import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const StyledPokemonDetail = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    margin: 10px;
`;

const StyledDetailGoBackBtn = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
`;

const PokemonDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const foundPokemon = MOCK_DATA.find((pokemon) => pokemon.id === parseInt(id));
    if (!foundPokemon) {
        return <StyledPokemonDetail>포켓몬을 찾을 수 없습니다.</StyledPokemonDetail>;
    }

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <StyledPokemonDetail>
            <img src={foundPokemon.img_url} alt={foundPokemon.korean_name}></img>
            <h1>{foundPokemon.korean_name}</h1>
            <h3>타입 : {foundPokemon.types.join(" , ")}</h3>
            <h3>{foundPokemon.description}</h3>
            <StyledDetailGoBackBtn onClick={handleBack}>뒤로 가기</StyledDetailGoBackBtn>
        </StyledPokemonDetail>
    );
};

export default PokemonDetail;

// {
//     img_url:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
//     korean_name: "뮤츠",
//     types: ["에스퍼"],
//     id: 150,
//     description: "에스퍼 타입의 전설의 포켓몬으로, 강력한 초능력을 가집니다.",
//   },
