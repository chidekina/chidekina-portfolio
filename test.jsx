import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

// Componente de teste simples
const SimpleTest = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>Teste Simples</h1>
                <Routes>
                    <Route path="/" element={<div>Página inicial funcionando!</div>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default SimpleTest;
