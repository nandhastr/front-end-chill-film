/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Daftar_gambar from '../components/Daftar_gambar';
import Footer from '../components/Footer';

const Daftar_saya = () => {
    const isProfilePage = location.pathname === "/profile";
    
    
    const [film, setfilm] = useState([
       {
         id:1,
           status: "Episode baru",
           ratingTop: "Top 10",
           url: "/img/Film-saya/film 1.png",
         },
         {
             id:2,
             url: "/img/Film-saya/film 2.png",
         },
         {
             id:3,
             status: "Episode baru",
             url: "/img/Film-saya/film 3.png",
         },
         {
             id:4,
             status: "Episode baru",
             url: "/img/Film-saya/film 4.png",
         },
         {
             id:5,
             status: "Episode baru",
             ratingTop: "Top 10",
             url: "/img/Film-saya/film 5.png",
         },
         {
             id:6,
             status: "Episode baru",
             ratingTop: "Top 10",
             url: "/img/Film-saya/film 6.png",
         },
         {
             id:7,
           ratingTop: "Top 10",
           url: "/img/Film-saya/film 7.png",
         },
         {
             id:8,
             ratingTop: "Top 10",
             url: "/img/Film-saya/film 8.png",
         },
         {
             id:9,
             url: "/img/Film-saya/film 9.png",
         },
         {
             id:10,
             url: "/img/Film-saya/film 10.png",
         },
         {
             id:11,
             url: "/img/Film-saya/film 11.png",
         },
         {
 
             id:12,
             url: "/img/Film-saya/film 12.png",
         },
    ]);
    const handleDeleteItem = (id) => {
        const confirmDelete = confirm("apakah anda yakin ingin menghapus film ini dari daftar saya?")

        if (confirmDelete) {
            setfilm((prevItems) => prevItems.filter((item) => item.id !== id));
            alert(`film telah dihapus dari daftar saya.`);
        } else {
            alert(`film batal dihapus dari daftar saya.`);
        }
        
    };

  return (
      <>
          {!isProfilePage && <Navbar />}
          <div>
              <Daftar_gambar title="Daftar Saya" items={film} onDelete={handleDeleteItem} />
          </div>
          <Footer />
      </>
  );
}

export default Daftar_saya
