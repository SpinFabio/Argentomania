import React from "react";
import Section from "./SectionDX";
import image1 from "./../assets/Incisioni.png"
import image2 from "./../assets/Rifilatura collane.png"
import image3 from "./../assets/Collane.png"
import image4 from "./../assets/OOrecchiniCerchio.png"

interface ServicesSectionProps {
  /* propName: propType */
}

const ServicesSection: React.FC<ServicesSectionProps> = (
  {
    /* props */
  }
) => {
  return (
    <div className="w-full bg-stone-950">
      <div className="pt-50 pb-20 px-10   md:pb-20  md:pt-70">
        <h2 className="flex text-center align-center justify-center text-5xl md:text-7xl font-bold  ">
          I Nostri Servizi:
        </h2>
        <h3 className="w-full text-center text-2xl ">
          Oltre alla vendita di articoli in argento, offriamo anche...
        </h3>
      </div>

      <Section
        title="Incisioni"
        content="Personalizza i tuoi gioielli con incisioni uniche! Offriamo incisioni a pantografo digitale per un risultato preciso e incisioni a mano per un tocco artigianale e autentico. Perfette per dediche, iniziali o simboli speciali."
        side="right"
        imgPATH={image1}
      />
      <Section
        title="Riparazione e Pulizia Gioielli"
        content="Dai nuova vita ai tuoi gioielli! Offriamo riparazioni per collane, bracciali, anelli e altri oggetti in argento e non solo, con la massima cura e precisione. Inoltre, utilizziamo la tecnologia a ultrasuoni per rimuovere sporco e ossidazione, restituendo ai tuoi gioielli la loro brillantezza originale."
        side="left"
        imgPATH={image2}
      />
      <Section
        title="Rinnova il Tuo Gioiello"
        content="Hai una collana o un bracciale da sistemare? Offriamo un servizio di montatura, rinfilatura e rimagliatura con o senza nodi per perle e pietre dure. Ridiamo stabilità e bellezza ai tuoi gioielli, mantenendo intatto il loro valore e il loro fascino. Insieme possiamo pensare a ridargli un nuovo look e renderlo più moderno, senza perdere la sua essenza."
        side="right"
        imgPATH={image3}
      />
      <Section
        title="Bomboniere personalizzate e non solo..."
        content="Rendi speciale ogni evento con una bomboniera unica. Personalizziamo ogni dettaglio per creare un regalo che rimanga nel tempo. Materiali di qualità e cura artigianale per un tocco esclusivo."
        side="left"
        imgPATH={image4}
      />
    </div>
  );
};

export default ServicesSection;
