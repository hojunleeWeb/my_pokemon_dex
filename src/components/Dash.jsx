import React from "react";
import StyledPokeCardBtn from "../style/StylePokeCardBtn";
import styled from "styled-components";

const StyledDashItemContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const StyledImageDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border-radius: 10%;
    margin: 10px;
    border: 2px dashed black;
    background-color: white;
`;

const StyledDashItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    width: 150px;
    height: 250px;
    margin: 10px;
`;

const StyledPTag = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: red;
`;

const Dash = ({ SelectedArray, onRemove }) => {
    return (
        <>
            <StyledPTag>나만의 포켓몬</StyledPTag>
            <StyledDashItemContainer>
                {SelectedArray.map((pokemon) => {
                    if (pokemon.korean_name == null) {
                        console.log(`null pokemon encountered`);
                        return (
                            <StyledImageDiv key={pokemon.id}>
                                <img
                                    src={
                                        "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
                                    }
                                    alt={null}
                                />
                            </StyledImageDiv>
                        );
                    } else {
                        return (
                            <StyledDashItem key={pokemon.id}>
                                <img src={pokemon.img_url} alt={pokemon.korean_name} />
                                <p>{pokemon.korean_name}</p>
                                <StyledPokeCardBtn
                                    onClick={() => {
                                        onRemove(pokemon.id);
                                    }}
                                >
                                    제거
                                </StyledPokeCardBtn>
                            </StyledDashItem>
                        );
                    }
                })}
            </StyledDashItemContainer>
        </>
    );
};

export default Dash;
