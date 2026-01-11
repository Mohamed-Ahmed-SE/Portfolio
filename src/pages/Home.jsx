import React from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import ServiceSummary from "../sections/ServiceSummary";
import Services from "../sections/Services";
import About from "../sections/About";
import Works from "../sections/Works";
import ContactSummary from "../sections/ContactSummary";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Works />
      <ContactSummary />
      <Contact />
    </>
  );
};

export default Home;
