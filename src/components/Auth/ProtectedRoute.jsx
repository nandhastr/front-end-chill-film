/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("isLoggedIn:", isLoggedIn); // apakah "true" atau null/false

    return isLoggedIn === "true" ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
