import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BasicStyledBtn = styled.button`
    width: 100px;
    height: 100px;
    background-color: red;
    border: 1px solid black;
    margin: 0px auto;
`;
const Home = () => {
    const navigate = useNavigate();
    return (
        <BasicStyledBtn
            onClick={() => {
                navigate("/dex");
            }}
        >
            {" works로 이동 "}
        </BasicStyledBtn>
    );
};

export default Home;
