import React from "react";
import Dash from "./Dash";
import styled from "styled-components";

const StyledDashContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    background-color: lightgray;
    border-radius: 20px;
    width: 100%;
    max-height: 100%;
    padding: 10px;
`;

const Dashboard = ({ selected, onRemove }) => {
    const SelectedArray = () => {
        if (selected.length < 6) {
            const nulls = Array.from({ length: 6 - selected.length }, (_, index) => {
                return {
                    isEmptySlot: true,
                    id: `empty-slot-${selected.length + index}`,
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
                    korean_name: null,
                };
            });
            return [...selected, ...nulls];
        }
        return selected;
    };
    return (
        <StyledDashContainer>
            <Dash SelectedArray={SelectedArray()} onRemove={onRemove} />
        </StyledDashContainer>
    );
};

export default Dashboard;
