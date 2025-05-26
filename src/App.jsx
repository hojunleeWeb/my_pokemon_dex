import React from "react";
import styled from "styled-components";
import AppRouter from "./router";

const AppWrapper = styled.div`
    width: 95%;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 20px; /* 내부 여백 (옵션) */
    box-sizing: border-box; /* padding이 width에 포함되도록 (옵션) */
`;

const App = () => {
    return (
        <AppWrapper>
            <AppRouter />
        </AppWrapper>
    );
};
export default App;
