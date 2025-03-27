---
title: Gestione Conai
sidebar_position: 2
---

La gestione **CONAI** (Consorzio Nazionale Imballaggi) in Fluentis è un modulo che consente di automatizzare l'applicazione delle spese relative al contributo ambientale CONAI sui documenti di acquisto e vendita. Questo strumento è fondamentale per le aziende che gestiscono imballaggi e che devono rispettare le normative italiane in materia di smaltimento e riciclo dei materiali di imballaggio. L'applicazione automatica delle spese CONAI in Fluentis avviene in base ai parametri configurati dall'utente e si riflette direttamente sui documenti contabili, garantendo un calcolo preciso e conforme.

## Attivazione della Gestione CONAI

Per attivare la gestione CONAI in Fluentis, è necessario configurare alcuni campi nella tabella [Società](/docs/configurations/tables/general-settings/company), nella sezione Altre impostazioni:

- **Codice Partner CONAI**: Questo codice viene assegnato alle aziende al momento dell'iscrizione al CONAI. È un identificativo unico che serve a monitorare le dichiarazioni e i contributi ambientali dovuti dall'azienda in base agli imballaggi immessi sul mercato.

- **Tipo Partner CONAI**: Definisce il ruolo dell'azienda nella filiera degli imballaggi in Italia. I tipi di partner disponibili sono:
  - **A – Autoproduttore**: Azienda che produce imballaggi per uso proprio senza venderli a terzi. Utilizza gli imballaggi per confezionare i propri prodotti.
  - **U1 – Commerciante/Distributore**: Azienda che acquista imballaggi per rivenderli senza utilizzarli direttamente. Rientrano in questa categoria i grossisti o distributori.
  - **U2 – Altri Utilizzatori**: Aziende che acquistano imballaggi per confezionare prodotti destinati alla vendita ma che non li producono. Non rientrano nelle categorie "Autoproduttore" o "Commerciante/Distributore".
  - **P – Produttore**: Azienda che produce imballaggi e li vende ad altri utilizzatori o distributori.

- **Data Inizio/Fine Partner CONAI**: È possibile specificare il periodo di validità della partnership con il CONAI, se applicabile.

## Tipi Materiali

La gestione delle tipologie di materiali di imballaggio avviene nella tabella della logistica denominata [Tipi Materiali](/docs/configurations/tables/logistics/material-types). In questa tabella si codificano i diversi materiali (come acciaio, alluminio, carta, legno, plastica, ecc.) utilizzati per gli imballaggi. Per ogni tipologia di materiale, si devono impostare:

- **Codice Materiale CONAI**: Specifica il tipo di materiale conforme alla classificazione CONAI.
- **Codice Articolo Fittizio**: Viene utilizzato per creare la riga di spesa relativa al contributo CONAI nelle bolle o fatture. Se non viene indicato un codice articolo, quel materiale non sarà valido per la configurazione CONAI.

È possibile utilizzare un singolo codice articolo per tutti i materiali o specificarne uno per ogni tipo, a seconda del livello di dettaglio desiderato nei documenti fiscali.

- **Tariffe e Unità di Misura**: La griglia sottostante permette di definire le tariffe applicabili per ciascun materiale in base ai vari intervalli di date. L'unità di misura, generalmente in tonnellate, deve essere coerente con quella utilizzata negli articoli di vendita e negli articoli fittizi CONAI.

## Definizioni in Anagrafica Articoli

Nella scheda [Pesi/Dimensioni](/docs/erp-home/registers/items/create-new-item) dell'anagrafica articoli è possibile specificare le caratteristiche degli imballaggi per la gestione CONAI. In questa sezione è possibile definire:

- **Usa in Acquisto/Vendita**: Specifica se l'articolo è soggetto al calcolo del contributo CONAI nei documenti di acquisto o vendita.
- **Tipologia di Imballaggio**: Indica se l'imballaggio è primario, secondario o terziario.
- **Vuoto o Pieno**: Indica se l'imballaggio è vuoto (flag non impostato) o pieno (flag impostato).
- **Materiali di Imballaggio**: Elenco dei materiali che compongono l'imballaggio con il relativo peso in unità di misura codificata.

## Impostazioni in Anagrafica Cliente/Fornitore

Per applicare correttamente le spese CONAI nei documenti di acquisto o vendita, è necessario configurare correttamente l'anagrafica del cliente o fornitore nella tab [Impostazioni CONAI](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai):

- **Tipo Partner CONAI**: Per il calcolo in vendita, il cliente deve essere un autoproduttore (A), un commerciante/distributore (U1) o altri utilizzatori (U2). Per il calcolo in acquisto, il fornitore deve essere un produttore (P).
- **Percentuali di Esenzione**: Nella griglia è possibile impostare eventuali percentuali di esenzione per tipo di materiale, con le relative date di validità.

## Tipi DDT e Tipi Fattura

Nei [tipi DDT](/docs/configurations/tables/sales/delivery-notes-type) e nei [tipi fatture](/docs/configurations/tables/sales/invoices-type) è presente un flag **Gestione CONAI**. Questo flag attiva il calcolo automatico del contributo CONAI per quel tipo specifico di documento.

## Esempio di Applicazione in una Fattura di Vendita

Se la gestione CONAI è attivata per una società, nel tab *Articoli* della fattura di vendita sarà disponibile un sottotab denominato **Materiali CONAI per l'articolo**. Questa sezione include i materiali di imballaggio che compongono l'articolo, con le seguenti informazioni:

- **Unità di Misura**: Specifica l'unità di misura utilizzata per il materiale.
- **Peso Unitario**: Il peso di ciascun materiale, eventualmente abbattuto della percentuale di esenzione definita nell'anagrafica del cliente.
- **Totale Peso**: Calcolato moltiplicando il numero di articoli venduti per il peso unitario.

Quando si salva il documento o si preme il pulsante *Ricalcolo CONAI* nella barra degli strumenti, Fluentis inserirà automaticamente una o più righe di spesa, recuperando l'articolo dei materiali con quantità e prezzo corrispondenti al costo CONAI per quel materiale. Nel file della fattura elettronica per lo SDI (Sistema di Interscambio), Fluentis aggiungerà automaticamente i tag nella sezione "Altri Dati Gestionali" per riportare i materiali e i pesi unitari degli articoli.

## Stampe di Controllo e Totalizzazione

Nei moduli delle fatture di acquisto e vendita sono disponibili due formati di stampa che consentono di estrarre i totali periodici per i vari materiali, sia per il controllo interno che per l'elaborazione dei dati da denunciare al CONAI. Per le vendite, è disponibile anche un report che rispecchia le pagine internet del CONAI per il caricamento dei dati delle dichiarazioni, filtrando i materiali in base alle lettere iniziali del Codice CONAI inserito nella tabella materiali.
