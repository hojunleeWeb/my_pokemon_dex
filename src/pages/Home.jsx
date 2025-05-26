import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BasicStyledBtn = styled.button`
    width: 200px;
    height: 50px;
    background-color: red;
    border: 1px solid black;
    margin: 0px auto;
`;
const StyledHomeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Home = () => {
    const navigate = useNavigate();
    return (
        <StyledHomeDiv>
            <BasicStyledBtn
                onClick={() => {
                    navigate("/dex");
                }}
            >
                {"포켓몬 도감 시작하기"}
            </BasicStyledBtn>
        </StyledHomeDiv>
    );
};

export default Home;
