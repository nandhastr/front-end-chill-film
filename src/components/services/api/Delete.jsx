/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import app from "../../../firebaseConfig";
import { getDatabase, ref, remove } from "firebase/database";
import { useDispatch } from "react-redux";
import{removeData} from "/store/redux/dataSlice"; 

const Delete = ({ userId, onDeleteSuccess }) => {
    const dispatch = useDispatch();
    const deleteData = async () => {
        const confirmDelete = confirm("Apakah Anda yakin ingin menghapus data ini?");
        if (confirmDelete) {
            const db = getDatabase(app);
            const refData = ref(db, "data/users/" + userId);

            try {
                await remove(refData);
                console.log("Data berhasil dihapus.");

                dispatch(removeData(userId));
                console.log("Data berhasil dihapus dari Redux Store.");

                const localData = JSON.parse(localStorage.getItem("data")) || [];
                const remmoveData = localData.filter((item) => item.id !== userId);
                localStorage.setItem("data", JSON.stringify(remmoveData));
                console.log("Data berhasil dihapus dari localStorage.");

                //callback untuk  redirect
                if (onDeleteSuccess) {
                    onDeleteSuccess();
                }
            } catch (error) {
                console.log("Terjadi kesalahan saat menghapus data: " + error.message);
            }
        } else {
            alert("Penghapusan data dibatalkan.");
        }
    };

    return (
        <button className="bg-red-600 rounded-lg p-1 text-xs hover:bg-red-800 transition duration-300" onClick={deleteData}>
            Hapus
        </button>
    );
};

export default Delete;
