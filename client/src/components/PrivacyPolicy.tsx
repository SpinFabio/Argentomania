import React from "react";
import {
  CONDIZIONE_SOCIALE_COMPLETA,
  EMAIL,
  NUMERO_TELEFONO,
  PARTITA_IVA,
  PEC,
  SEDE_LEGALE,
} from "../config/config";

interface PrivacyPolicyProps {
  /* propName: propType */
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = (
  {
    /* props */
  }
) => {
  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Informativa sulla Privacy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Titolare del Trattamento
          </h2>
          <p className="mb-4 leading-relaxed">
            Il <span className="font-semibold">Titolare del trattamento</span> è{" "}
            <span className="font-bold">{CONDIZIONE_SOCIALE_COMPLETA}</span>,
            con sede in <span className="font-medium">{SEDE_LEGALE}</span>.{" "}
            <br />
            <span className="font-semibold">P.IVA:</span> {PARTITA_IVA} <br />
            <span className="font-semibold">Email:</span>{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-blue-500 hover:underline"
            >
              {EMAIL}
            </a>{" "}
            - <span className="font-semibold">PEC:</span>{" "}
            <a href={`mailto:${PEC}`} className="text-blue-500 hover:underline">
              {PEC}
            </a>{" "}
            <br />
            <span className="font-semibold">Telefono:</span>{" "}
            <a
              href={`tel:${NUMERO_TELEFONO}`}
              className="text-blue-500 hover:underline"
            >
              {NUMERO_TELEFONO}
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Tipologia di Dati Raccolti
          </h2>
          <p className="mb-4">
            Durante la navigazione del sito web raccogliamo le seguenti
            tipologie di dati:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <span className="font-semibold">Dati di navigazione:</span>{" "}
              informazioni tecniche quali indirizzo IP, tipo di browser,
              informazioni sui click, pagine visitate
            </li>
            <li className="mb-2">
              <span className="font-semibold">Dati analitici:</span>{" "}
              informazioni statistiche sull'utilizzo del sito tramite Google
              Analytics in forma anonimizzata
            </li>
            <li className="mb-2">
              <span className="font-semibold">
                Dati forniti volontariamente:
              </span>{" "}
              eventuali informazioni fornite attraverso il servizio di
              messaggistica WhatsApp
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Finalità del Trattamento
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Consentire la navigazione del sito web e garantirne il corretto
              funzionamento
            </li>
            <li className="mb-2">
              Analizzare l'utilizzo del sito per migliorarne le funzionalità e
              l'esperienza utente
            </li>
            <li className="mb-2">
              Gestire le richieste di contatto e fornire assistenza
            </li>
            <li className="mb-2">Adempiere ad obblighi di legge</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Base Giuridica del Trattamento
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              <span className="font-semibold">Legittimo interesse:</span> per i
              dati di navigazione necessari al funzionamento del sito
            </li>
            <li className="mb-2">
              <span className="font-semibold">Consenso:</span> per l'utilizzo di
              Google Analytics
            </li>
            <li className="mb-2">
              <span className="font-semibold">
                Esecuzione di misure precontrattuali:
              </span>{" "}
              per la gestione delle richieste di contatto
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Modalità del Trattamento
          </h2>
          <p className="mb-4">
            Il trattamento dei dati avviene mediante strumenti informatici e
            telematici, con logiche strettamente correlate alle finalità
            indicate e in modo da garantire la sicurezza e la riservatezza dei
            dati stessi.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Durata del Trattamento
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              I dati di navigazione vengono cancellati immediatamente dopo
              l'elaborazione
            </li>
            <li className="mb-2">
              I dati analitici vengono conservati in forma anonima per un
              massimo di 26 mesi
            </li>
            <li className="mb-2">
              I dati di contatto vengono conservati per il tempo necessario a
              rispondere alle richieste e successivamente per il periodo
              previsto dagli obblighi di legge
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Destinatari dei Dati
          </h2>
          <p className="mb-4">
            I dati raccolti potrebbero essere condivisi con:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Fornitori di servizi tecnici (hosting, manutenzione sito)
            </li>
            <li className="mb-2">Google per il servizio di analytics</li>
            <li className="mb-2">
              WhatsApp/Meta per il servizio di messaggistica
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. Diritti degli Interessati
          </h2>
          <p className="mb-4">
            Gli utenti possono esercitare i seguenti diritti:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Accesso ai dati personali</li>
            <li className="mb-2">Rettifica o cancellazione degli stessi</li>
            <li className="mb-2">Limitazione del trattamento</li>
            <li className="mb-2">Opposizione al trattamento</li>
            <li className="mb-2">Portabilità dei dati</li>
            <li className="mb-2">Revoca del consenso</li>
          </ul>
          <p className="mb-4">
            Per esercitare questi diritti, è possibile contattare il Titolare ai
            recapiti indicati sopra. È inoltre possibile proporre reclamo al
            Garante per la protezione dei dati personali.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            9. Trasferimento dei Dati
          </h2>
          <p className="mb-4">
            I dati potrebbero essere trasferiti verso Paesi terzi in virtù
            dell'utilizzo di servizi come Google Analytics e WhatsApp. Tali
            trasferimenti sono regolati da clausole contrattuali standard
            approvate dalla Commissione Europea.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            10. Modifiche alla Privacy Policy
          </h2>
          <p>
            Il Titolare si riserva il diritto di apportare modifiche alla
            presente privacy policy in qualunque momento, dandone notizia su
            questa pagina. Si prega dunque di consultare regolarmente questa
            pagina.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
