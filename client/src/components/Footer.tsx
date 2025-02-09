import React from "react";
import Social from "./Social";
import {
  CONDIZIONE_SOCIALE_COMPLETA,
  EMAIL,
  FB_LINK,
  IG_LINK,
  NUMERO_TELEFONO,
  PARTITA_IVA,
  PEC,
  SEDE_LEGALE,
  WA_LINK,
} from "../config/config";

interface FooterProps {
  /* propName: propType */
}

const Footer: React.FC<FooterProps> = (
  {
    /* props */
  }
) => {
  return (
    <>
      <div className="w-full bg-stone-950  mt-10 mb-10 flex flex-col md:flex-row">
        <div className="flex flex-col  border-amber-200 md:w-1/2 p-10 md:p-20">
          <img className="p-1" src="/src/assets/Logo-Footer.svg" />
        </div>
        <div className=" md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="pb-4 text-3xl font-bold ">
            Non esitare a contattarci!
          </h2>
          <div>
            <Social
              source="/src/assets/WA-icon.svg"
              text="Scrivici per maggiori informazioni"
              redirect={WA_LINK}
            />
            <Social
              source="/src/assets/FB-icon.svg"
              text="Scopri le nostre novità"
              redirect={FB_LINK}
            />
            <Social
              source="/src/assets/IG-icon.svg"
              text="Entra nel nostro mondo"
              redirect={IG_LINK}
            />
          </div>
        </div>
      </div>

      <div className="w-full  mb-30 flex flex-col justify-center items-center">
        <p>{CONDIZIONE_SOCIALE_COMPLETA + "-" + SEDE_LEGALE}</p>
        <p>{PARTITA_IVA}</p>
        <p>{CONDIZIONE_SOCIALE_COMPLETA + "-" + SEDE_LEGALE}</p>
        <p>{PEC + " - " + EMAIL + " - " + NUMERO_TELEFONO}</p>
      </div>
    </>
  );
};

export default Footer;
