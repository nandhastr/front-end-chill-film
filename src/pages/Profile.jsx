/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import Daftar_saya from "./Daftar_saya";
import SubscriberStatus from "./../components/SubscriberStatus";
import Read from '../components/services/api/Read';
import Update from './../components/services/api/Update';


const Profile = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const userId = localStorage.getItem("userId");

    const handleInputChange = (field, value) => {
        setUserData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <>
            <Navbar />
            <Read userId={userId} setUserData={setUserData} />
            <section>
                <div className="px-14 mt-12">
                    <div className="title">
                        <h1 className="font-semibold">Profile Saya</h1>
                    </div>
                    <div className="grid sm:grid-cols-2 mt-2 sm:mt-7 sm:gap-10 gap-4 grid-cols-1">
                        <div className="profile flex flex-col sm:order-first order-last ">
                            <div className="flex gap-8 items-center">
                                <img src="/img/user.png" alt="" className="rounded-full sm:w-24 w-16 border" />
                                <div className="ket flex flex-col gap-4">
                                    <button className="bg-transparent border px-2 py-1 text-[#09147A] text-sm rounded-full border-[#09147A] hover:border-blue-300 hover:bg-[#5160ef] transition duration-300">Ubah Foto</button>
                                    <h6>
                                        <i className="fa-regular fa-bookmark mr-1" />
                                        Maks. 2mb
                                    </h6>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <div className="mb-4 bg-gray-700 rounded-lg">
                                    <label className="block text-sm font-medium mb-2 text-[#9D9EA1] px-2">Nama Pengguna</label>
                                    <input type="text" value={userData.username} className="block w-full bg-gray-700 text-white rounded-lg p-2" onChange={(e) => handleInputChange("username", e.target.value)} />
                                </div>
                                <div className="mb-4 bg-gray-700 rounded-lg">
                                    <label className="block text-sm font-medium mb-2 text-[#9D9EA1] px-2">Email</label>
                                    <input type="email" value={userData.email} className="block w-full bg-gray-700 text-white rounded-lg p-2" onChange={(e) => handleInputChange("email", e.target.value)} />
                                </div>
                                <div className="mb-4 bg-gray-700 rounded-lg">
                                    <label className="block text-sm font-medium mb-2 text-[#9D9EA1] px-2">Kata Sandi</label>
                                    <input type="password" value={userData.password} className="block w-full bg-gray-700 text-white rounded-lg p-2" onChange={(e) => handleInputChange("password", e.target.value)} />
                                </div>
                            </div>
                            <Update userId={userId} userData={userData} onUpdate={refreshPage} />
                        </div>
                        <div className="Subscribe">
                            <SubscriberStatus isSubscribed={false} />
                        </div>
                    </div>
                    <Daftar_saya />
                </div>
            </section>
        </>
    );
};

export default Profile;
