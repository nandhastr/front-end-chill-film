/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import app from "../../../firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";

const Update = ({ userId, userData, onUpdate }) => {
    const updateData = async () => {
        const db = getDatabase(app);
        const newData = ref(db, "data/users/" + userId);

        try {
            await set(newData, userData);
            alert("Data berhasil diupdate.");
            onUpdate(); // Callback untuk tindakan setelah update
        } catch (error) {
            alert("Terjadi kesalahan saat memperbarui data: " + error.message);
        }
    };

    return (
        <button className="bg-[#09147A] rounded-full w-[7rem] p-2 text-white sm:mt-4 mt-5" onClick={updateData}>
            Simpan
        </button>
    );
};

export default Update;
