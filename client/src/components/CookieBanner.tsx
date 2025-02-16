import React, { useEffect, useState } from "react";

interface CookieBannerProps {
  /* propName: propType */
}

const CookieBanner: React.FC<CookieBannerProps> = (
  {
    /* props */
  }
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);

    // Qui puoi inizializzare Google Analytics
    // initializeGoogleAnalytics();
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-950/95 text-white p-4 shadow-lg backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <p>
              Questo sito utilizza cookie tecnici necessari al funzionamento del
              sito e cookie di terze parti per analizzare il traffico (Google
              Analytics) e per l'integrazione con i social media. Puoi accettare
              tutti i cookie o gestire le tue preferenze.
            </p>
            <a href="/privacy-policy" className="underline">
              Maggiori informazioni
            </a>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 bg-stone-700 hover:bg-stone-600 rounded"
            >
              Rifiuta
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
