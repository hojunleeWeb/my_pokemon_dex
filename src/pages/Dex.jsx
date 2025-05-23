import { useState } from "react";
import MOCK_DATA from "../mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";

const StyledDexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
`;

const Dex = () => {
    const [selected, setSelected] = useState([]);

    const handleAdd = (pokemon) => {
        if (selected.find((p) => p.id === pokemon.id)) return;
        if (selected.length >= 6) {
            alert("최대 6마리까지만 선택할 수 있습니다.");
            return;
        }
        setSelected([...selected, pokemon]);
    };

    const handleRemove = (id) => {
        setSelected(selected.filter((p) => p.id !== id));
    };

    return (
        <StyledDexDiv>
            <h1 className="text-2xl font-bold mb-4">포켓몬 덱스</h1>
            <Dashboard selected={selected} onRemove={handleRemove} />
            <PokemonList pokemons={MOCK_DATA} onAdd={handleAdd} />
        </StyledDexDiv>
    );
};

export default Dex;
