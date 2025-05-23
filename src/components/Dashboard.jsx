import React from "react";
import Dash from "./Dash";

const Dashboard = ({ selected, onRemove }) => {
    const selectedCount = selected.length;
    return (
        <>
            {selected.length === 0 ? (
                <Dash selected={selected} selectedCount={selectedCount} onRemove={onRemove} />
            ) : (
                <Dash selected={selected} selectedCount={selectedCount} onRemove={onRemove} />
            )}
        </>
    );
};

export default Dashboard;
