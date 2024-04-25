import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Inicio</h1>} />
                <Route path="/login" element={<LoginPage></LoginPage>} />
                <Route path="/register" element={<RegisterPage></RegisterPage>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App