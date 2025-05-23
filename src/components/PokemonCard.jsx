import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    border: solid 1px black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: auto;
    height: 350px;
`;

const StyledPokeCardBtn = styled.button`
    background-color: red;
    color: white;
    border: 1px solid red;
    border-radius: 10px;
    width: 100px;
`;

export default function PokemonCard({ pokemon, onAdd }) {
    return (
        <StyledCard>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
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
}
