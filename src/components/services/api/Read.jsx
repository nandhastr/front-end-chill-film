/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import app from "../../../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

const Read = ({ userId, setUserData }) => {
    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app);
            const dataRef = ref(db, "data/users/" + userId);
            try {
                const snapshot = await get(dataRef);
                if (snapshot.exists()) {
                    setUserData(snapshot.val());
                } else {
                    alert("Pengguna tidak ditemukan.");
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mengambil data:", error);
            }
        };
        if (userId) {
            fetchData();
        }
    }, [userId, setUserData]);

    return null; 
};

export default Read;
