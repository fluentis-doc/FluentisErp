---
title: Tipi prova
sidebar_position: 4
---

In questa tabella è possibile precodificare le tipologie di Prove di qualità da effettuare nei prodotti. Esse possono essere utilizzate nelle **Schede tecniche** come proprietà dell'articolo, nei **Piani di controllo** come prove da effettuare nei vari flussi aziendali, oppure nel **Certificato di analisi** per indicare che la prova ha rilevato determinati valori di conformità o meno.   
Nella prima griglia è possibile inserire:

**Codice**: identificativo e spiegato dalla relativa **Descrizione**;

**Categoria**: è possibile raggruppare le varie tipologie di prove in categorie, identificate da Codice e Descrizione;

**Laboratorio interno**: questo flag indica che la prova viene eseguita internamente all'azienda;

**Laboratorio esterno**: se la prova viene effettuata esternamente, è possibile inserire il fornitore che effettuerà l'operazione;

**Strumento di misura**: è possibile indicare lo strumento utilizzato, nel caso siano presenti valori da rilevare; è composto da un **Codice/Categoria**.

**Da rilevare**: questo flag indica che la prova contiene dei valori da rilevare; tipicamente, se non presente signifa che il Tipo prova identifica delle caratteristiche e viene quindi utilizzato nelle schede tecniche;

**Tipo valore**: è possibile indicare se i valori da rilevare nella prova sono di tipo Numerico, Si/No o Testo; indicando la prima opzione, si abiliterà il campo **Tipo limite** dei valori da rilevare;    

**Generico**: questo flag indica che questa prova deve sempre essere proposta nei piani di controllo; se non attivo, nel campo successivo **Tipo documento** sarà possibile specificare i documenti in cui attivare questa prova.


La seconda griglia si compone invece di diverse tab:

**Attributi Tipo di prova**    
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) generali per il tipo prova.

**Parametri di configurazione Prova e strumento di misura**
Contiene gli [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) necessari agli operatori per preparare tutti gli strumenti necessari per poter iniziare una determinata prova. Possono essere considerate delle configurazioni necessarie, informazioni operative propedeutiche all'esecuzione della prova.

**Esiti possibili**
E' possibile personalizzare, per ogni singola prova, gli esiti possibili, da un elenco Esiti. Quando verrà rilevata una singola prova, in base alla suo conformità il sistema proporrà l'esito con **Def. positivo** oppure **Def. negativo**.

**Funzioni di rilevamento ed approvazione**
E' un'attribuzione di diritti che elenca chi può andare a rilevare i valori della prova. E' richiesta la Funzione aziendale, il **Tipo attività**(tra può approvare, può rilevare, o può rilevare ed approvare) ed eventuali **Note**.

**Immagini**
E' possibile associare delle immagini utili alla prova da rilevare. Per esempio, potrebbe servire ad indicare visivamente alcune caratteristiche della prova stessa.

