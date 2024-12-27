/* eslint-disable no-unused-vars */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Beranda from "./pages/Beranda";
import Daftar_saya from "./pages/Daftar_saya";
import Series from "./pages/Series";
import Film from "./pages/Film";
import Profile from './pages/Profile';
import Langganan from './pages/LanggananPaket';
import Payment from './components/Payment';
import PayFinish from './components/PayFinish';
import VideoPage from './pages/VideoPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/beranda" element={<Beranda />} />
                <Route path="/daftar-saya" element={<Daftar_saya />} />
                <Route path="/series" element={<Series />} />
                <Route path="/film" element={<Film />} />
                <Route path="/VideoPage/:id" element={<VideoPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/langgananPaket" element={<Langganan />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/payFinish" element={<PayFinish />} />
            </Routes>
        </Router>
    );
}

export default App;
