import React, { PureComponent } from "react";

import styled from "styled-components";

const StyledDashDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    background-color: gray;
    border-radius: 20px;
    width: 100%;
    height: 400px;
    padding: 10px;
`;

const StyledDashFlex = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10%;
    margin: 10px;
    border: 2px dashed black;
    background-color: white;
`;
const Dash = ({ selected, selectedCount, onRemove }) => {
    return (
        <StyledDashDiv>
            <p>나만의 포켓몬</p>
            <StyledDashFlex>
                {selectedCount === 0
                    ? Array.from({ length: 6 }, (_, index) => (
                          <div key={index}>
                              <StyledImage
                                  src="https://i.namu.wiki/i/x7KrsctDuACm2dLbaM0X2Uag7BoL9sf9DLVauPztdApPBPn5yL1rMm8fSOBuREhK9lAKskl7oJ177UuValUIcg.webp"
                                  alt="placeholder"
                              />
                          </div>
                      ))
                    : selected.map((pokemon) => (
                          <div key={pokemon.id}>
                              <StyledImage src={pokemon.img_url} alt={pokemon.korean_name} />
                              <h3>{pokemon.korean_name}</h3>
                              <button onClick={() => onRemove(pokemon.id)}>삭제</button>
                          </div>
                      ))}
            </StyledDashFlex>
        </StyledDashDiv>
    );
};

export default Dash;
