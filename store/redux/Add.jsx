/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Create from "../../src/components/services/api/Create";
import LabelInput from '../../src/components/LabelInput';
import app from "../../src/firebaseConfig"
import { getDatabase, push, ref } from 'firebase/database';
import { useDispatch } from "react-redux";
import { setData } from "./dataSlice";

const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleAddUser = async (e) => {
        e.preventDefault()
        const { username, email, password, confirmPassword } = formData;
        
        try {
            const db = getDatabase(app);
            const newDataRef = push(ref(db, "data/users"));
            const userId = newDataRef.key;
            // simpan data menggunakan fungsi Create yang ada di services/api
            await Create(username, email, password, confirmPassword, navigate);

            // simpan ke redux
            dispatch(
                setData({
                    id: userId,
                    username: username,
                    email:email,
                    password: password,
                    confirmPassword:confirmPassword
                })
            );

            // reload halaman
            navigate("/listView");
            window.location.reload();
        } catch (error) {
            console.error("Terjadi kesalahan saat menambahkan data:", error);
            alert("Gagal menambahkan data. Silakan coba lagi.");
        }
    };
    
    const back = () => { 
        navigate("/listView");
     }


  return (
      <>
          <div className="max-w-lg mx-auto mt-2 p-6 border shadow-lg rounded-lg">
              <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Tambah Data</h1>
              <form onSubmit={handleAddUser} className="space-y-4">
                  <div>
                      <LabelInput htmlFor="username" label="Username" />
                      <input
                          type="text"
                          name="username"
                          placeholder="Masukkan username"
                          value={formData.username}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-400 bg-transparent"
                      />
                  </div>

                  <div>
                      <LabelInput htmlFor="email" label="Email" />
                      <input type="email" name="email" placeholder="Masukkan email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400 bg-transparent" />
                  </div>

                  <div>
                      <LabelInput htmlFor="password" label="Password" />
                      <input
                          type="password"
                          name="password"
                          placeholder="Masukkan password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400 bg-transparent"
                      />
                  </div>

                  <div>
                      <LabelInput htmlFor="confirmPassword" label="Konafirmasi Kata Sandi" />
                      <input
                          type="password"
                          name="confirmPassword"
                          placeholder="Konfirmasi password"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                          autoComplete="off"
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400 bg-transparent"
                      />
                  </div>

                  <div className="flex gap-2">
                      <button type="submit" className="p-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                          Tambah
                      </button>
                      <button onClick={back} className="p-2  bg-red-600 hover:bg-red-800 py-2 rounded-md transition duration-300">
                          Batal
                      </button>
                  </div>
              </form>
          </div>
      </>
  );

}

export default Add
