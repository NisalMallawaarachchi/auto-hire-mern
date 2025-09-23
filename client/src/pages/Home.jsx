import Banner from "../components/Banner.jsx";
import FeaturedSection from "../components/FeaturedSection.jsx";
import Hero from "../components/Hero.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Newsletter from "../components/Newsletter.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection/>
      <Banner/>
      <Testimonial/>
      <Newsletter/>
    </>
  );
};

export default Home;
