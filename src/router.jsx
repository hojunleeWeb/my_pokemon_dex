// src/router.jsx
import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Dex from "./pages/dex";
import PokemonDetail from "./components/PokemonDetail";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dex" element={<Dex />} />
                <Route path="/dex/:id" element={<PokemonDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
