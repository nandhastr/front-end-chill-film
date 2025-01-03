import app from "../../../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

const saveData = async (username, email, password, confirmPassword, navigate) => {
    if (password !== confirmPassword) {
        alert("Kata sandi dan konfirmasi kata sandi tidak cocok!");
        return;
    }

    const db = getDatabase(app);
    const newDataRef = push(ref(db, "data/users"));
    const userId = newDataRef.key;

    try {
        await set(newDataRef, {
            id: userId,
            username,
            email,
            password,
        });

        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userId", userId);

        alert("Registrasi berhasil!");
        navigate("/");
    } catch (error) {
        alert("Terjadi kesalahan: " + error.message);
    }
};

export default saveData;
