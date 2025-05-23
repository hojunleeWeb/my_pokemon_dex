import React from "react";
import Dash from "./Dash";

const Dashboard = ({ selected, onRemove }) => {
    const SelectedArray = () => {
        if (selected.length < 6) {
            const nulls = Array.from({ length: 6 - selected.length }, (idx) => {
                return {
                    id: idx,
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png",
                    korean_name: null,
                };
            });
            return [...selected, ...nulls];
        }
        return selected;
    };
    return (
        <>
            <Dash SelectedArray={SelectedArray()} onRemove={onRemove} />
        </>
    );
};

export default Dashboard;
