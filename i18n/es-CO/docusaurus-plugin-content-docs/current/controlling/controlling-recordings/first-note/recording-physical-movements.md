---
title: Registrazioni movimenti fisici 
sidebar_position: 1
---

La maschera delle ***Registrazioni Movimenti Fisici*** è il punto dove possiamo inserire o visualizzare i dati delle grandezze fisiche che utilizzeremo per le elaborazioni del *Controlling*, per i driver che si basano su grandezza fisica piuttosto che per il calcolo delle tariffe dei centri su quantità.
Per alcune unità di misura, come ad esempio i metri quadri occupati dai vari centri per ripartire costi di un immobile aziendale, l'inserimento sarà effettuato manualmente ad inizio anno, caricando i dati nella form o magari duplicando i valori dell'anno precedente tramite l'apposito pulsante; per altri tipi di grandezze fisiche, come potrebbero essere le ore macchina o ore uomo, la tabella potrebbe essere valorizzata tramite la procedura di ***Ripresa dati da produzione*** che va a totalizzare, periodo per periodo, i dati delle Dichiarazioni di produzione o le ore di attività su Progetto; ulteriore possibilità è il caricamento da foglio excel attraverso il modello *PhysicalMovingControlling - Movimenti Fisici Controlling* disponibile tra le Importazioni on demand di ***Bizlink***.

I campi disponibili nella griglia superiore sono i seguenti:

- l'[***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) di riferimento del dato

- l'[***Unità di misura***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units)

- la ***Distribuzione periodi*** da utilizzare, che è un campo obbligatorio per le Unità di misura di *Flusso*. Si tratta di indicare a ***FluentisERP*** come suddividere nei singoli periodi il dato inserito per un range di questi

- la ***Data*** di registrazione del movimento quantitativo

- l'***Anno***  di riferimento

- il range ***Periodo da***  e ***Periodo a*** di riferimento delle quantità inserite

- il campo ***Stato***, non editabile, che indica se la riga è stata caricata manualmente o che tipo di origine ha

Nella griglia sottostante andremo poi ad inserire i dettagli delle quantità, in particolare valorizzando:
- il [***Centro di origine***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) del movimento

- il ***Progetto destinazione***, se sono quantità dirette su un progetto

- il [***Centro destinazione***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), cioè il centro per il quale il *Centro di origine* precedente ha lavorato per queste quantità

:::tip Esempio
Quando una persona delL'ufficio tecnico, ad esempio, prepara i dettagli tecnici di un preventivo ad uso del commerciale, avremo il centro dell'Ufficio tecnico come *Centro di origine* e il centro Commerciale come *Centro destinazione*.
I [***Cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) con ***Tipo distribuzione*** 10-Reversione su produzione a tariffa standard, 11-Reversione diretta a tariffa standard, 12-Reversione su produzione a tariffa calcolata fanno riferimento alle quantità dei centri di origine e/o destinazione
:::

- la ***Quantità*** valida per la riga

- una eventuale ***Nota*** libera di riga

- i campi ***Precodice***, ***Numero*** e ***Descrizione*** del cespite legato alla riga inserita (valorizzato ad esempio per i cespiti utilizzati in produzione, se si usano ammortamenti a quantità)

- la ***Divisione*** di riferimento della riga, interessante in società con più Divisioni attive
