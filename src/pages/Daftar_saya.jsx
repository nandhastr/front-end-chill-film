/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Daftar_gambar from '../components/Daftar_gambar';
import Footer from '../components/Footer';

const Daftar_saya = () => {
    const isProfilePage = location.pathname === "/profile";
  const film = [
      {
          episode: "Episode baru",
          ratingTop: "Top 10",
          url: "/img/Film-saya/film 1.png",
        },
        {
            url: "/img/Film-saya/film 2.png",
        },
        {
            episode: "Episode baru",
            url: "/img/Film-saya/film 3.png",
        },
        {
            episode: "Episode baru",
            url: "/img/Film-saya/film 4.png",
        },
        {
            episode: "Episode baru",
            ratingTop: "Top 10",
            url: "/img/Film-saya/film 5.png",
        },
        {
            episode: "Episode baru",
            ratingTop: "Top 10",
            url: "/img/Film-saya/film 6.png",
        },
        {
          ratingTop: "Top 10",
          url: "/img/Film-saya/film 7.png",
        },
        {
            ratingTop: "Top 10",
            url: "/img/Film-saya/film 8.png",
        },
        {
            url: "/img/Film-saya/film 9.png",
        },
        {
            url: "/img/Film-saya/film 10.png",
        },
        {
            url: "/img/Film-saya/film 11.png",
        },
        {
            url: "/img/Film-saya/film 12.png",
        },
  ];

  return (
      <>
          {!isProfilePage && (
              
              <Navbar />
          )}
          <div>
              <Daftar_gambar title="Daftar Saya" items={film} />
          </div>
          <Footer />
      </>
  );
}

export default Daftar_saya
