import { useLocation } from "react-router-dom";

import Dropdown from "../components/Dropdown";
import HeroContent from "../components/HeroContent";
import Navbar from "../components/Navbar";
import FilmSeries from "../components/FilmSeries";
import SeriesOffer from "../components/SeriesOffer";
import TopRating from "../components/TopRating";
import FilmTrending from "../components/FilmTrending";
import FilmRilis from "../components/FilmRilis";
import Footer from "../components/Footer";

const Film = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/Dashboard";

    const genres = ["Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama", "Komedi", "Petualangan", "Perang", "Romantis", "Sains & Alam", "Thriller"];

    const heroTitle = "Avatar 3";
    const heroDescription = "Melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi.";

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
                    <img src="/img/film-image.png" className="object-cover w-full  h-[25rem] md:h-[30rem]" alt="Hero" />

                    <HeroContent title={heroTitle} description={heroDescription} />
                </div>
            </section>

            <FilmSeries title="Melanjutkan Tonton Film" />
            <SeriesOffer title="Film Persembahan Chill" />
            <TopRating title="Top Rating Film Hari Ini" />
            <FilmTrending title="Film Trending" />
            <FilmRilis title="Film Rilis" />
            <Footer />
        </>
    );
};

export default Film;
