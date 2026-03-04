import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import CarouselSection from "../components/CarouselSection";
import FeaturesSection from "../components/FeaturesSection";
import BlogsSection from "../components/BlogsSection";
import CtaSection from "../components/CtaSection";

const Home = () => {
 return (
  <main>
   <Hero />
   <StatsSection />
   <CarouselSection />
   <FeaturesSection />
   <BlogsSection />
   <CtaSection />
  </main>
 );
};

export default Home;
