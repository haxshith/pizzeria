/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Footer from "./components/Footer/Footer.jsx";


const App = () => {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
