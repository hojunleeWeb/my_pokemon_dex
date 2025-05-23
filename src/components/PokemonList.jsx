import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const StyledPokemonList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));
    gap: 4px;
    background-color: gray;
    padding: 10px;
    width: 100%;
    height: auto;
`;

export default function PokemonList({ pokemons, onAdd }) {
    return (
        <StyledPokemonList>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAdd} />
            ))}
        </StyledPokemonList>
    );
}
