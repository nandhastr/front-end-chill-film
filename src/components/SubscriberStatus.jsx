/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from 'react-router-dom';

const SubscriberStatus = ({ isSubscribed }) => {
    return (
        <div className={`subscribe w-auto h-min p-6 rounded-lg ${isSubscribed ? "bg-gradient-to-tl from-[#192DB7] to-[#5370D4]" : "bg-[#3D4142]"}`}>
            {isSubscribed && (
                <div className="status bg-gray-400 w-[6rem] items-center justify-center flex text-[#09147A] font-semibold p-2 rounded-full mb-2">
                    <p className="text-sm">Aktif</p>
                </div>
            )}
            <div className="subs flex gap-4">
                <div className="coution">
                    <img src={isSubscribed ? "/img/Check.png" : "/img/Warning.png"} alt="" />
                </div>
                <div className="coutionTitle flex-row">
                    <h1 className="font-semibold mb-2">{isSubscribed ? "Akun Premium Individual✨" : "Saat Ini Anda Belum Berlangganan"}</h1>

                    {isSubscribed ? (
                        <div>
                            <p>Saat ini kamu sedang menggunakan akses akun premium.</p>
                            <div className="date mt-4 justify-center items-center">
                                <p className="text-xs">Berlaku hingga 31 Desember 2023</p>
                            </div>
                        </div>    
                    ) : (
                        <div>
                            <p>Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</p>
                        </div>
                    )}
                </div>
            </div>
            {!isSubscribed && (
                <div className="btn mt-4 items-end flex justify-end">
                    <Link to="/LanggananPaket" className="btn-langganan bg-[#2F3334b] border border-gray-500 rounded-full p-2 hover:scale-[1.1] hover:text-[#9D9EA1] hover:bg-[#3D4142] transition duration-300 text-sm">Mulai Berlangganan</Link>
                </div>
            )}
        </div>
    );
};

export default SubscriberStatus;
