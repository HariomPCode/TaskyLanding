import React from "react";
import Hero from "../components/hero.jsx";
import Features from "@/components/features.jsx";
import Testimonials from "@/components/testimonials.jsx";
import Pricing from "@/components/pricing.jsx";
import Footer from "@/components/footer.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
}
