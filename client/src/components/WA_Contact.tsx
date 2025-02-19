import React from "react";
import { WA_LINK } from "../config/config";
import WAimage from "./../assets/WA-top.png";
import AMimage from "./../assets/AM-Favicon.png"

interface WA_ContactProps {
  /* propName: propType */
}

const WA_Contact: React.FC<WA_ContactProps> = (
  {
    /* props */
  }
) => {
  const handleRedirectToWA = () => {
    window.location.href = WA_LINK;
  };

  const handleScrollToTopSection = () => {
    const element = document.getElementById("top-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" sticky top-0 w-full bg-stone-950/50 backdrop-blur-sm p-2 z-10">
      <div className="flex flex-row justify-between py-2 px-4">
        <div
          onClick={handleScrollToTopSection}
          className="flex flex-row justify-center items-center"
        >
          <img className="size-10 md:size-14 mr-2" src={AMimage} />
          <div className="flex flex-col w-20 md:w-40 justify-center  items-center">
            <p>di Ornella Gramaglia</p>
          </div>
        </div>

        <div
          onClick={handleRedirectToWA}
          id="contact-us"
          className="flex flex-row justify-center px-3  items-center bg-gradient-to-r from-[#40EC62] to-[#1FCE40]"
        >
          <img
            className="size-8 p-1 mr-1"
            src={WAimage}
            alt="icona whatsapp"
          />
          <p className="font-bold pr-3">Contattaci ora!</p>
        </div>
      </div>
    </div>
  );
};

export default WA_Contact;
