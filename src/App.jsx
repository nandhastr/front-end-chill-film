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
import Profile from "./pages/Profile";
import Langganan from "./pages/LanggananPaket";
import Payment from "./components/Payment";
import PayFinish from "./components/PayFinish";
import VideoPage from "./pages/VideoPage";
import ProtectedRoute from "./components/Auth/ProtectedRoute"; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route
                    path="/beranda"
                    element={
                        <ProtectedRoute>
                            <Beranda />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/daftar-saya"
                    element={
                        <ProtectedRoute>
                            <Daftar_saya />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/series"
                    element={
                        <ProtectedRoute>
                            <Series />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/film"
                    element={
                        <ProtectedRoute>
                            <Film />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/VideoPage/:id"
                    element={
                        <ProtectedRoute>
                            <VideoPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/langgananPaket"
                    element={
                        <ProtectedRoute>
                            <Langganan />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/payment"
                    element={
                        <ProtectedRoute>
                            <Payment />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/payFinish"
                    element={
                        <ProtectedRoute>
                            <PayFinish />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
