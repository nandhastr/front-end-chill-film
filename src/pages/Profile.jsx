import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./../components/Navbar";
import M_List from "./My_List";
import SubscriberStatus from "./../components/SubscriberStatus";
import GetData from '../components/services/api/GetData';
import Update from './../components/services/api/Update';
import Delete from "../components/services/api/Delete";


const Profile = () => {
    const navigate = useNavigate
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchUserData = async () => {
            if (!userId) {
                console.log("User ID tidak ditemukan.");
                return;
            }
            try {
                const data = await GetData(userId);
                if (data) {
                    setUserData(data);
                } else {
                    console.log("Data pengguna tidak ditemukan.");
                }
            } catch (error) {
                console.error("Gagal mengambil data pengguna:", error);
            }
        };

        fetchUserData();
    }, [userId]);
    
    const handleInputChange = (field, value) => {
        setUserData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleDelete = () => {
        window.location.reload();
        navigate("/");
    };
    const handleUpdate = () => { 
        window.location.reload();
        navigate("/profile");

     }

    return (
        <>
            <Navbar />
            <section>
                <div className="px-14 mt-12">
                    <div className="grid sm:grid-cols-2 mt-2 sm:mt-7 sm:gap-10 gap-4 grid-cols-1 mb-9">
                        <div className="profile flex flex-col sm:order-first order-last ">
                    <div className="title mb-5">
                        <h3 className="font-semibold">Profile Saya</h3>
                    </div>
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
                            <div className="flex gap-2">
                                <Update userId={userId} userData={userData}  onUpdateSuccess={handleUpdate} />

                                <Delete userId={userId} onDeleteSuccess={handleDelete} />
                            </div>
                        </div>
                        <div className="Subscribe">
                            <SubscriberStatus isSubscribed={false} />
                        </div>
                    </div>

                    <M_List  />
                        
                </div>
            </section>
        </>
    );
};

export default Profile;
