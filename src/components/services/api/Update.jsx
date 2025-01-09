/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import app from "../../../firebaseConfig";
import { getDatabase, ref, update } from "firebase/database";
import { useDispatch } from "react-redux";
import { updateData } from "/store/redux/dataSlice"; 

const Update = ({ userId, userData, onUpdateSuccess }) => {
    const dispatch = useDispatch();

    const updateDataHandler = async () => {
        const db = getDatabase(app);
        const dataRef = ref(db, `data/users/${userId}`);

        try {
            // Update data di Firebase
            await update(dataRef, userData);

            // Update data di Redux
            dispatch(updateData({ id: userId, ...userData }));

            // Update data di localStorage
            const localData = JSON.parse(localStorage.getItem("users")) || [];
            const updatedLocalData = localData.map((user) => (user.id === userId ? { ...user, ...userData } : user));
            localStorage.setItem("users", JSON.stringify(updatedLocalData));

            alert("Data berhasil diperbarui.");
            // Callback untuk redirect halaman
            if (onUpdateSuccess) {
                onUpdateSuccess();
            }
        } catch (error) {
            console.error("Terjadi kesalahan saat memperbarui data:", error.message);
        }
    };

    return (
        <button type="button" className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition duration-300" onClick={updateDataHandler}>
            Simpan Perubahan
        </button>
    );
};

export default Update;
