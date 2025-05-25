import { createContext } from "react";
import App from "../App";
import MOCK_DATA from "../mock.js";

export const PokemonContext = createContext(null);

// AppProvider 컴포넌트 정의
const AppProvider = ({ children }) => {
    return <PokemonContext.Provider value={{ pokemons: MOCK_DATA }}>{children}</PokemonContext.Provider>;
};

export default AppProvider; // AppProvider를 기본 내보내기
