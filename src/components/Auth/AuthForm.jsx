 /* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import React from "react";

function AuthForm({ title, subtitle, buttonText, isLogin, onSubmit }) {
    
    const onLogin = () => {
        location.href = "/beranda";
    }
    


    return (
        <div className="bg-[#181A1CD6] rounded-lg shadow-lg p-8 md:p-12 max-w-md w-full md:m-10">
            <div className="text-center flex flex-col justify-center items-center">
                <img src="/img/logo.png" className="mb-3" alt="" />
                <h2 className="text-white mt-2 font-bold text-3xl">{title}</h2>
                <p className="text-white mt-2">{subtitle}</p>
            </div>
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <div className="pb-2">
                    <label htmlFor="username" className="text-white text-sm">
                        Username
                    </label>
                    <input type="text" placeholder="Masukkan username" className="w-full bg-transparent text-[#C1C2C4] placeholder-gray-500 hover:placeholder-gray-400 rounded-full border px-4 py-2 focus:outline transition duration-300" />
                </div>
                <div className="pb-2">
                    <label htmlFor="password" className="text-white text-sm">
                        Kata Sandi
                    </label>
                    <input type="password" placeholder="Masukkan kata sandi" className="w-full bg-transparent text-[#C1C2C4] placeholder-gray-500 hover:placeholder-gray-400 hover:text-white rounded-full border px-4 py-2 transition duration-300" />
                </div>
                {!isLogin && (
                    <div className="pb-2">
                        <label htmlFor="confirm-password" className="text-white text-sm">
                            Konfirmasi Kata Sandi
                        </label>
                        <input type="password" id="confirm-password" placeholder="Masukkan ulang kata sandi" className="w-full bg-transparent text-[#C1C2C4] hover:placeholder-gray-400  placeholder-gray-500 rounded-full border px-4 py-2 transition duration-300" />
                    </div>
                )}
                {isLogin ? (
                    <div className="flex items-center justify-between text-sm">
                        <Link to="/register" className="text-[#C1C2C4] hover:text-white hover:underline transition duration-300">
                            Belum punya akun? <b>Daftar</b>
                        </Link>
                        <Link to="/forgot-password" className="text-[#C1C2C4] hover:underline hover:text-white transition duration-300">
                            Lupa kata sandi?
                        </Link>
                    </div>
                ) : (
                    <div className="flex items-center justify-between text-sm">
                        <Link to="/" className="text-[#C1C2C4] hover:text-white hover:underline transition duration-300">
                            Sudah punya akun? <b>Masuk</b>
                        </Link>
                    </div>
                )}

                {isLogin ? (
                    <button type="submit" className="w-full rounded-full bg-[#3D4142] text-white py-2 hover:bg-[#707174] transition duration-300 " onClick={onLogin}>
                        {buttonText}
                    </button>
                ) : (
                    <Link to="/" className="w-full block text-center rounded-full bg-[#3D4142] text-white py-2 hover:bg-[#707174] transition duration-300">
                        {buttonText}
                    </Link>
                )}

                <>
                    <div className="text-center text-sm text-gray-400">Atau</div>
                    <button type="button" className="w-full flex items-center justify-center bg-transparent text-white py-2 rounded-full border border-white hover:bg-[#707174] transition duration-300">
                        <img src="/img/googleLogo.png" alt="Google" className="w-5 h-5 mr-2" />
                        {title} dengan Google
                    </button>
                </>
            </form>
        </div>
    );
}

export default AuthForm;
