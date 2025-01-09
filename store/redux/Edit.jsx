/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../src/firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import Update from "../../src/components/services/api/Update";

const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userId } = location.state || {};

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    // Fetch data dari Firebase berdasarkan userId
    useEffect(() => {
        const fetchData = async () => {
            if (!userId) {
                navigate("/listView");
                return;
            }
            try {
                const db = getDatabase(app);
                const dataRef = ref(db, `data/users/${userId}`);
                const snapshot = await get(dataRef);

                if (snapshot.exists()) {
                    setFormData(snapshot.val());
                } else {
                    alert("Data tidak ditemukan.");
                }
            } catch (error) {
                console.error("Fetching data gagal:", error);
            }
        };

        fetchData();
    }, [userId, navigate]);

    // Meng-handle perubahan input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/listView");
    };
    const handleUpdate = () => { 
        navigate("/listView");
     }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Edit Data</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-transparent"
                        placeholder="Masukkan username"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-transparent"
                        placeholder="Masukkan email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-transparent"
                        placeholder="Masukkan password"
                        required
                    />
                </div>
                <div className="flex gap-2">
                    <Update
                        userId={userId}
                        userData={formData}
                        onUpdateSuccess={handleUpdate}
                    />
                    <button type="button" onClick={handleBack} className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition duration-300">
                        Kembali
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Edit;
