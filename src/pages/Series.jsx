/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import HeroContent from "../components/HeroContent";
import Navbar from "../components/Navbar";
import FilmSeries from "../components/FilmSeries";
import SeriesPersembahan from "../components/SeriesPersembahan";
import TopRating from "../components/TopRating";
import FilmTrending from "../components/FilmTrending";
import FilmRilis from "../components/FilmRilis";
import Footer from "../components/Footer";

const Series = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/beranda";

    const genres = ["Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama", "Komedi", "Petualangan", "Perang", "Romantis", "Sains & Alam", "Thriller"];

    const heroTitle = "Happines";
    const heroDescription = "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.";
  


    return (
        <>
            <Navbar />
            <section className="mb-8 sm:mb-12 lg:mb-8">
                <div className="relative">
                    {!isHomePage && (
                        <div className="absolute mt-[10rem] px-9 hidden md:block">
                            <Dropdown options={genres} label="Genre" />
                        </div>
                    )}
                    <img src="/img/series-image.png" className="object-cover w-full sm:w-full h-[70vh] md:h-[80vh] lg:h-[100vh]" alt="Hero" />

                    <HeroContent title={heroTitle} description={heroDescription} />
                </div>
            </section>

            <FilmSeries title="Melanjutkan Tonton Series" />
            <SeriesPersembahan title="Series Persembahan Chill" />
            <TopRating title="Top Rating Series" />
            <FilmTrending title="Series Trending" />
            <FilmRilis title="Film Rilis" />
            <Footer/>
        </>
    );
};

export default Series;
