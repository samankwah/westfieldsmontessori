// App.jsx - Main component

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Hero from "./sections/Hero";
// import Features from "./sections/Features";
// import AboutCompany from "./sections/AboutSchool";
// import AboutProduct from "./sections/AboutProduct";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import ContactUs from "./sections/ContactUs";
import FAQs from "./sections/FAQs";
import Footer from "../../components/Footer";
import Programs from "./sections/Programs";
import AboutSchool from "./sections/AboutSchool";
// import MontessoriApproach from "./sections/MontessoriApproach";
import AboutUs from "./sections/AboutUs";

function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check system preference or saved preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0D0D0D] transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Programs />
      <AboutUs />
      <AboutSchool />
      <Testimonials />
      <CTA />
      <ContactUs />
      <FAQs />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
