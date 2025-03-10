import React from "react";
import Section from "./SectionDX";

interface MidSectionProps {
  /* propName: propType */
}

const MidSection: React.FC<MidSectionProps> = (
  {
    /* props */
  }
) => {
  return (
    <div>
      <Section
        title="Chi Siamo"
        content="Argentomania è una boutique specializzata in arte orafa nel centro storico di Pinerolo, in Via del Duomo 18. Lavoriamo con passione e collaboriamo con artigiani locali per offrire creazioni di qualità. Ci trovate dal martedì al sabato, dalle 8:00 alle 18:30."
        side="left"
      />
      <Section
        title="Cosa puoi trovare da noi"
        content="Proponiamo una selezione di gioielli in argento, cornici e accessori per la casa. Offriamo anche servizi di incisione, riparazione e creazione di gioielli su misura."
        side="right"
      />
    </div>
  );
};

export default MidSection;
