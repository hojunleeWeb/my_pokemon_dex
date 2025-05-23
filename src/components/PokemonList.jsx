import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import Dashboard from "./Dashboard";

const StyledPokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`;

const StyledPokemonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));
    gap: 4px;
    background-color: lightgray;
    padding: 10px;
    width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 20px;
`;

const PokemonList = ({ pokemons }) => {
    //pokemons는 porps로 받아온 데이터 -> mock.js에서 가져온 데이터

    //selected는 Dashboard에서 선택된 pokemon을 관리하는 state
    const [selected, setSelected] = useState([]);

    //handleAdd는 PokemonCard에서 추가 버튼을 클릭했을 때, 해당 pokemon을 selected에 추가하는 함수
    const handleAdd = (pokemon) => {
        //selected에 이미 해당 pokemon이 있는지 확인 -> 있으면 아무런 동작을 하지 않는다.
        if (selected.find((p) => p.id === pokemon.id)) {
            alert("이미 선택된 포켓몬입니다.");
            return;
        }

        if (selected.length >= 6) {
            alert("최대 6마리까지만 선택할 수 있습니다.");
            return;
        }
        //selected에 해당 pokemon이 없으면 그전까지 추가했던 pokemon 배열 + 이번에 추가한 pokemon을 더하여 추가한다.
        setSelected([...selected, pokemon]);
    };

    //DashBoard에서 remove버튼을 클릭했을 때, 해당 pokemon을 selected에서 제거하는 함수
    const handleRemove = (id) => {
        setSelected(selected.filter((p) => p.id !== id));
    };

    return (
        <StyledPokemonContainer>
            <Dashboard selected={selected} onRemove={handleRemove} />
            <StyledPokemonGrid>
                {pokemons.map((pokemon) => (
                    //pokemons로 구성된 데이터에서 각각의 pokemon을 PokemonCard에 props로 전달
                    <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={handleAdd} />
                ))}
            </StyledPokemonGrid>
        </StyledPokemonContainer>
    );
};

export default PokemonList;
