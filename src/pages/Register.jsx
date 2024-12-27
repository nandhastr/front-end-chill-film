/* eslint-disable no-unused-vars */
import React from "react";
import AuthForm from "../components/Auth/AuthForm";

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{ backgroundImage: "url('/img/background.jpg')" }} className="min-h-screen bg-cover bg-center flex items-center justify-center">
            <AuthForm
                title="Daftar"
                subtitle="Selamat Datang"
                buttonText="Daftar"
                isLogin={false}
                onSubmit={handleSubmit} />
        </div>
    );
};

export default Register;
