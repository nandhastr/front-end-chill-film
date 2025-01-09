
import app from "../../../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

const Create = async (username, email, password, confirmPassword, navigate) => {
    if (password !== confirmPassword) {
        alert("Kata sandi dan konfirmasi kata sandi tidak cocok!");
        return;
    }

    const db = getDatabase(app);
    const newDataRef = push(ref(db, "data/users"));
    const userId = newDataRef.key;

    try {
        const newUser = {
            id: userId,
            username,
            email,
            password,
        };
        // simpan ke firebase
        await set(newDataRef, newUser);

        

        // simpan ke localstorage
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userData", JSON.stringify(newUser));
        const userData = JSON.parse(localStorage.getItem("userData"));
        console.log(userData);

        alert("data berhasil di tambahakan ");
        navigate("/");
    } catch (error) {
        console.log("Terjadi kesalahan: " + error.message);
    }
};

export default Create;
