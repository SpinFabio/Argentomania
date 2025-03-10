import React from "react";
import { classNames } from "../util/tailwind-util";

interface SectionProps {
  title: string;
  content: string;
  side: "left" | "right"; // dove si trova la scritta
}

const Section: React.FC<SectionProps> = ({ title, content, side }) => {
  let contRX = (
    <div className="flex flex-col p-15 md:p-30 md:w-1/2 ">
      <h1 className="text-4xl md:text-6xl font-bold ">{title}</h1>
      <p className="py-4">{content}</p>
    </div>
  );
  let contLX = (
    <div className=" justify-center align-center flex md:h-auto  h-100 w-full p-4 md:p-10 ">
      <div className="w-full h-full bg-amber-400 ">

      </div>

    </div>
  );

  const flexDirection = side === "right" ? "flex-col-reverse" : "flex-col";

  if (side === "right") {
    const tmp = contRX;
    contRX = contLX;
    contLX = tmp;
  }

  return (
    <div
      className={classNames(
        "flex  md:flex-row bg-stone-950 py-11",
        flexDirection
      )}
    >
      {contRX}
      {contLX}
    </div>
  );
};

export default Section;
