import Image from "next/image";
import Hero from "./Components/Hero";
import StepsSection from "./Components/StepsSection";
import OurServicesSection from "./Components/OurServicesSection";
import WhyUsSection from "./Components/WhyUsSection";
import AboutUs from "./Components/AboutUs";
import WhatSaySection from "./Components/WhatSaySection";
import Faq from "./Components/Faq";
import GetPriceSection from "./Components/GetPriceSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <StepsSection />
      <OurServicesSection />
      <GetPriceSection />
      <WhyUsSection />
      <WhatSaySection />
      <Faq />
      <AboutUs />
      <Footer />
    </div>
  );
}
