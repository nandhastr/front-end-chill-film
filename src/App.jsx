/* eslint-disable no-unused-vars */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashBoard from "./pages/Dashboard";
import My_List from "./pages/My_List";
import Series from "./pages/Series";
import Film from "./pages/Film";
import Profile from "./pages/Profile";
import Subscription from "./pages/PackageSubscription";
import Payment from "./components/Payment";
import PayFinish from "./components/PayFinish";
import VideoPage from "./pages/VideoPage";
import ProtectedRoute from "./components/Auth/ProtectedRoute"; 
import ListView from "./components/ListView";
import Add from "../store/redux/Add";
import Edit from "../store/redux/Edit";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/listview" element={<ListView />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit" element={<Edit />} />

                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route
                    path="/Dashboard"
                    element={
                        <ProtectedRoute>
                            <DashBoard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/MyList"
                    element={
                        <ProtectedRoute>
                            <My_List />
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
                    path="/subscription package"
                    element={
                        <ProtectedRoute>
                            <Subscription />
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
