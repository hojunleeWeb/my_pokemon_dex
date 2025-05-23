import styled from "styled-components";
import Router from "./router.jsx";

const AppWrapper = styled.div`
    width: 95%;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 20px; /* 내부 여백 (옵션) */
    box-sizing: border-box; /* padding이 width에 포함되도록 (옵션) */

    /* 미디어 쿼리를 사용하여 반응형으로 너비 조절 */
    @media (max-width: 768px) {
        max-width: 90%; /* 작은 화면에서는 너비 줄이기 */
        padding: 10px;
    }
`;

const App = () => (
    <AppWrapper>
        <Router />
    </AppWrapper>
);
export default App;
