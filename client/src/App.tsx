import Top from "./components/Top";
import Section from "./components/SectionDX";
import "./index.css";
import ServicesSection from "./components/ServicesSection";

function App() {



  return (
    <div className=" text-gray-100 w-screen h-screen font-sans overflow-x-hidden">
      <Top />
      <Section
        title="Chi Siamo"
        content="Argentomania è un punto di riferimento nel cuore di Pinerolo per gli amanti dell'argento. Offriamo una selezione esclusiva di gioielli, cornici e accessori, unendo qualità artigianale e design raffinato. Inoltre, forniamo servizi di incisione, riparazione e creazione di gioielli personalizzati, collaborando con artisti locali per dare vita a pezzi unici."
        side="left"
      />
      <ServicesSection/>
      <div className="h-80 w-full"></div>
    </div>
  );
}

export default App;
