---
title: Documenti esteri in uscita
sidebar_position: 5
---

La normativa attuale prevede di inviare all'Agenzia delle Entrate anche i dati relativi alle operazioni di cessione beni/prestazioni servizi EFFETTUATE e RICEVUTE da soggetti NON identificati/non residenti nel territorio dello Stato.

- Per i documenti **EMESSI** è possibile utilizzare il medesimo tracciato previsto per le fatture elettroniche italiane; in alternativa possono essere inviati con il tracciato previsto per i documenti esteri di acquisto di cui al punto seguente.

- Per l'invio al Sdi dei documenti di acquisto da fornitori esteri è previsto un ** [tracciato apposito](/docs/finance-area/declarations/declarations/electronic-invoice-for-foreign) **.

La firma digitale per entrambe le tipologie di file è obbligatoria.

L'invio al SdI di questi file viene gestito in Fluentis attraverso le operazioni di cambio stato dei documenti.

Il documento XML viene quindi trasmesso al SdI che lo controlla e lo acquisice e restituisce le notifiche relative all'eventuale scarto dovuto alla mancata conformità del file oppure dell'avvenuta acquisizione.

**Dalla presente form è possibile gestire singolarmente per ogni documento, oppure massivamente per molteplici documenti in contemporanea, il cambio stati per l'invio all'SDI seguendo il medesimo tracciato delle fatture italiane.**

Nella Form Documenti acquisti esteri in uscita vengono visualizzati tutti i file prodotti dalle Registrazioni contabili e relativi a questa tipologia di accadimento. La form è suddivisa in una sezione superiore nella quale vengono esposti i filtri di selezione dei file gestiti, tra i quali :


 - Da data/ A data di ricevimento:
 - Da data/A data di ricezione cliente:

Nella griglia dei risultati vengono visualizzati i dati relativi ai file gestiti o da gestire:


 - **Stato SdI**: accoglie la descrizione dello stato del documento, riportando sia lo stato di gestione interno di Fluentis sia lo stato riportato da Fluentis Business Hub e acquisito direttamente da SdI.
 - **Nome file SdI**: il nome del file che viene creato nel momento in cui il documento viene avanzato nello stato GENERATA; nel formato originale o successivamente all'apposizione della firma digitale, rappresenta il file di fattura da inviare a SdI.
 - **Sdi Id**: l'identificativo univoco che il SdI attribuisce al documento nel momento della ricezione
 - **Data ultimo evento**: la data dell'ultimo cambio stato avvenuto sul file o manualmente o per effetto dell'avanzamento dell'elaborazione sul SdI

Nel ribbon menu sono presentate le funzioni di gestione del documento o dei documenti selezionati:

il pulsante ![](/img/neutral/common/view.png) **Visualizza** consente di visionare il   dove è possibile prendere visione degli eventi collegati al file XML generato, eseguirne lo scarico o modificarne lo stato:

![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image02.png)

- il pulsante ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image03.png)   **Scarica allegato** esegue il download del file selezionato su una cartella di filesystem prescelta.

- il pulsante ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image04.png) **Apri documento**  apre la registrazione contabile relativa al file selezionato






