import React from "react";

interface CookiePolicyProps {
  /* propName: propType */
}

const CookiePolicy: React.FC<CookiePolicyProps> = (
  {
    /* props */
  }
) => {
  return (
    <div>
      <div className="min-h-screen bg-stone-950 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cosa sono i cookie?</h2>
            <p className="mb-4">
              I cookie sono piccoli file di testo che i siti visitati inviano al
              terminale dell'utente, dove vengono memorizzati, per poi essere
              ritrasmessi agli stessi siti alla visita successiva.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Tipologie di Cookie utilizzati
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Cookie Tecnici</h3>
              <p className="mb-3">
                Questi cookie sono necessari per il corretto funzionamento del
                sito web. Includiamo in questa categoria:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">
                  Cookie di navigazione: necessari per garantire la normale
                  navigazione e fruizione del sito web
                </li>
                <li className="mb-2">
                  Cookie di funzionalità: utilizzati per memorizzare le scelte
                  effettuate dall'utente durante la navigazione
                </li>
              </ul>
              <p>
                Questi cookie non richiedono il consenso dell'utente in quanto
                sono strettamente necessari per il funzionamento del sito.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Cookie Analitici</h3>
              <p className="mb-3">
                Utilizziamo Google Analytics per raccogliere informazioni
                statistiche anonime sull'utilizzo del sito. Questi cookie
                raccolgono dati in forma aggregata per:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">
                  Analizzare il numero di utenti e il modo in cui visitano il
                  sito
                </li>
                <li className="mb-2">Monitorare le prestazioni del sito</li>
                <li className="mb-2">
                  Migliorare l'esperienza di navigazione degli utenti
                </li>
              </ul>
              <p>
                L'indirizzo IP degli utenti viene anonimizzato e i dati non
                vengono utilizzati per identificare individualmente gli utenti.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">
                Cookie di Terze Parti
              </h3>
              <p className="mb-3">
                Il nostro sito include collegamenti ai social media (Facebook,
                Instagram, WhatsApp) che potrebbero impostare i loro cookie
                quando si utilizzano questi servizi o si accede alle loro pagine
                attraverso i nostri link.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Durata dei Cookie</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Cookie tecnici di sessione: vengono eliminati alla chiusura del
                browser
              </li>
              <li className="mb-2">
                Cookie analitici di Google: durata massima di 2 anni
              </li>
              <li className="mb-2">
                Cookie di preferenze: durata massima di 1 anno
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Come gestire i Cookie
            </h2>
            <p className="mb-4">
              È possibile gestire le preferenze relative ai cookie attraverso il
              banner che appare alla prima visita del sito. Inoltre, è possibile
              modificare le impostazioni dei cookie in qualsiasi momento
              attraverso le impostazioni del browser:
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Chrome
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Firefox
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Safari
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Edge
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Aggiornamenti della Cookie Policy
            </h2>
            <p>
              La presente Cookie Policy può essere soggetta ad aggiornamenti.
              Gli utenti sono pertanto invitati a verificarne periodicamente il
              contenuto.
            </p>
          </section>
        </div>
      </div>
      );
    </div>
  );
};

export default CookiePolicy;
