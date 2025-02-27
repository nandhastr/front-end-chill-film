import { useLocation } from "react-router-dom";

import Dropdown from "./Dropdown";
import HeroContent from "./HeroContent";

const HeroSection = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/Dashboard";

    const genres = ["Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama", "Komedi", "Petualangan", "Perang", "Romantis", "Sains & Alam", "Thriller"];

    const heroTitle = "Duty After School";
    const heroDescription = "Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.";

    return (
        <section className="mb-8 sm:mb-12 lg:mb-8">
            <div className="relative">
                {!isHomePage && (
                    <div className="absolute mt-[10rem] px-9">
                        <Dropdown
                            options={genres}
                            label="Genre"
                        />
                    </div>
                )}
                <img src="/img/hero-image.png" className="object-cover w-full  h-[25rem] md:h-[30rem] " alt="Hero" />

                <HeroContent
                    title={heroTitle}
                    description={heroDescription}
                />
            </div>
        </section>
    );
};

export default HeroSection;
