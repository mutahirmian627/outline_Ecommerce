import { motion, useScroll } from "framer-motion";
import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  // Tracks scroll progress
  const { scrollYProgress } = useScroll(); 

  return (
    <div>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0 0", 
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "#000",
          zIndex: 1000,
        }}
      />

      {/* Home Page Content */}
      <div>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsletterBox />
      </div>

      {/* Add Spacer for Scroll */}
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Home;
