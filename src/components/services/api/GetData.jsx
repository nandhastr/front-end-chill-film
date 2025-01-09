import app from "../../../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

const GetData = async (userId = null) => {
    const db = getDatabase(app);
    const dataRef = userId ? ref(db, `data/users/${userId}`) : ref(db, "data/users/");

    try {
        const snapshot = await get(dataRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            if (userId) {
                return data; 
            } else {
                return Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                })); 
            }
        } else {
            console.warn("Data tidak ditemukan.");
            return userId ? null : []; 
        }
    } catch (err) {
        console.error("Terjadi kesalahan saat mengambil data:", err);
        throw err; 
    }
};

export default GetData;
