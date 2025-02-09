import React from "react";
import WA_Contact from "../components/WA_Contact";
import Top from "../components/Top";
import MidSection from "../components/MidSections";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

interface MainPageProps {
  /* propName: propType */
}

const MainPage: React.FC<MainPageProps> = (
  {
    /* props */
  }
) => {
  return (
    <div>
      <WA_Contact />
      <Top />
      <MidSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default MainPage;
