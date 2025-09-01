import React from "react";
import LandingPage from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./components/Pricing";

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </BrowserRouter>
    );
};