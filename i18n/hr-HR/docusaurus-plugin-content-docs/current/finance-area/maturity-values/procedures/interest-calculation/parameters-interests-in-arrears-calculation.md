---
title: Parametri di calcolo interessi moratori
sidebar_position: 3
---

Nella form sono presenti una lista di flag di selezione dei tipi di partite per le quali procedere al calcolo dei tassi di interesse, mentre in altro è presente un campo di filtro per codici di conto/sottoconto. Al di sotto di questo si deve impostare il tipo di tasso di default da applicare e i flag che guidano la logica di calcolo:

**Calcola per le partite chiuse nel periodo**: la procedura andrà a verificare le partite che sono diventate chiuse all'interno del range di date impostate e solo per queste andrà a calcolare il valore degli interessi, quindi per i pagamenti parziali non sarà conteggiato alcun interesse;

**Calcola per i pagamenti del periodo**: la procedura andrà a individuare i pagamenti registrati all'interno del range di date e su questi importi andrà a calcolare il valore degli interessi relativi: questa impostazione è quella consigliata.

In caso non sia stato inserito nessun flag il calcolo andrà a valorizzare gli interessi relativi ai giorni di ritardo presenti nel range di date impostate.

**Tipo documento** e **tipo pagamento**: sono ulteriori filtri di individuazione delle partite sulle quali eseguire il calcolo interessi.

Il radio button successivo consente di definire il tipo di tasso da utilizzare nel calcolo interessi:

- calcolare gli interessi solo sui clienti per i quali è stato inserito in anagrafica una data accordo;

- calcolare gli interessi sui clienti con un accordo secondo le impostazioni di anagrafica, il tasso di default inserito in alto per tutti gli altri;

- calcolare gli interessi per tutti i clienti secondo il tasso d'interesse di default inserito in alto.

Un ultimo flag, **Escludi effetti emessi**, già impostato di default, prevede l'esclusione dagli interessi delle partite pagate con effetti del modulo portafoglio effetti: tale impostazione serve, in particolare, per i tipi tasso sui quali è stato impostato il calcolo anche a sconto, in quanto la chiusura della partita cliente viene solitamente rilevata direttamente all'emissione della ricevuta bancaria/effetto cambiario.

La procedura di calcolo si avvia con il tasto **Calcolo interessi**, nella ribbon bar.






