import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedCategories from "../components/FeaturedCategories"
import WhyParentsTrustUs from "../components/WhyParentsTrustUs"
import BestSellers  from "../components/BestSellers"
import TrendingProducts from "../components/TrendingProducts"
import TestimonialSection from "../components/TestimonialSection"
import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"
function Home() {
  return (
    <div>
      <Navbar />
   <HeroSection />
   <FeaturedCategories />
   <WhyParentsTrustUs />
   <BestSellers  />
   <TrendingProducts />
   <TestimonialSection />
   <FAQSection />
   <Footer />
    </div>
  );
}

export default Home;