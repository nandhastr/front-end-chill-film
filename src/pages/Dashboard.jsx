import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import NextWatch from '../components/NextWatch'
import TopRating from '../components/TopRating';
import FilmTrending from '../components/FilmTrending';
import FilmRilis from '../components/FilmRilis';
import Footer from '../components/Footer';

const Dashboard = () => {
 

  return (
          <>
          <Navbar />
          <HeroSection />
          <NextWatch title="Melanjutkan Nonton" />
          <TopRating title="Top Rating Film dan Series Hari ini" />
          <FilmTrending title="Film Trending" />
          <FilmRilis title="Rilis Baru" />
          <Footer />
      </>
  );
}

export default Dashboard
