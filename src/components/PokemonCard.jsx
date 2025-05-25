import React from "react";
import styled from "styled-components";
import StyledPokeCardBtn from "../style/StylePokeCardBtn";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div`
    border: solid 1px black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: auto;
    height: 300px;
    margin: 10px;
`;

const PokemonCard = ({ pokemon, onAdd }) => {
    const navigate = useNavigate();

    return (
        <StyledCard>
            <img
                src={pokemon.img_url}
                alt={pokemon.korean_name}
                onClick={() => {
                    navigate(`/dex/${pokemon.id}`);
                }}
            />
            <h3>{pokemon.korean_name}</h3>
            <p>{pokemon.types.join(" , ")}</p>
            <StyledPokeCardBtn
                onClick={() => {
                    onAdd(pokemon);
                }}
            >
                추가
            </StyledPokeCardBtn>
        </StyledCard>
    );
};

export default PokemonCard;
