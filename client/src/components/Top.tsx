import React from "react";
import Citations from "./Citations";

interface TopProps {
  /* propName: propType */
}

const Top: React.FC<TopProps> = (
  {
    /* props */
  }
) => {
  return (
    <div id="top-section" className="h-fit w-full flex justify-center flex-col text-center py-20 md:pt-40 ">
      <h1 className="text-5xl sm:text-7xl  md:text-8xl font-serif lg:text-9xl  ">
        Argentomania
      </h1>
      <h2 className="text-3xl   md:text-5xl lg:text-6xl font-thin p-10">
        la tua argenteria di fiducia <br />a Pinerolo
      </h2>
      <h3 className="font-thin p-2 md:p-7 md:text-2xl">di Ornella Gramaglia</h3>
      <Citations
        text="I gioielli non sono fatti per dare alle donne un’aura di ricchezza, ma per renderle belle."
        author="– Coco Chanel"
      />
    </div>
  );
};

export default Top;
