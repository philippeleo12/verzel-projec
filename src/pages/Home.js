import React from "react";
//Page Components
import HomeSection from "../components/HomeSection";
/*import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";*/
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const HomeMain = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <HomeSection />

      <ScrollTop />
    </motion.div>
  );
};

export default HomeMain;
