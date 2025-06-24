// src/pages/Home.jsx
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Slideshow from '../components/Sildeshow';

const Home = () => {
  return (
    <div>
      <Slideshow />
      <FAQ />
      <Footer/>
    </div>
  );
};

export default Home;

