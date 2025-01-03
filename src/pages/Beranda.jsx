/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import MelanjutkanTonton from '../components/MelanjutkanNonton'
import TopRating from './../components/TopRating';
import FilmTrending from '../components/FilmTrending';
import FilmRilis from '../components/FilmRilis';
import Footer from '../components/Footer';

const Beranda = () => {
 

  return (
          <>
          <Navbar />

          <HeroSection />
          <MelanjutkanTonton title="Melanjutkan Nonton" />
          <TopRating title="Top Rating Film dan Series Hari ini" />
          <FilmTrending title="Film Trending" />
          <FilmRilis title="Rilis Baru" />
          <Footer />
      </>
  );
}

export default Beranda
