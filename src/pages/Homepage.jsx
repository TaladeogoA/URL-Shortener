import { useState } from "react";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LinkShortener from "../components/LinkShortener";
import Navbar from "../components/Navbar";
import Result from "../components/Result";

const Homepage = () => {
  // get the input link set by the LinkShortener component and pass it to the Result component

  const [inputLink, setInputLink] = useState("");

  return (
    <>
      <Navbar />
      <Hero />
      <LinkShortener setInputLink={setInputLink} />
      <Result inputLink={inputLink} />
      <Features />
      <CTA />
      <Footer />
    </>
  );
};

export default Homepage;
