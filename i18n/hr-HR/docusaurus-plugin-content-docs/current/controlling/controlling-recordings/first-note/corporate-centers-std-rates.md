---
title: Tariffe standard centri aziendali
sidebar_position: 3
---

In questa form è possibile inserire (tramite il tasto **Nuovo**) delle tariffe standard fisse (non calcolate tramite quozienti definiti tra il risultato di un modello di riclassificazione d il risultato di un centro aziendale).

Tali tariffe saranno poi utilizzate dai cost driver (in particolare dal criterio di distribuzione *Reversione su produzione a tariffa standard*) per valorizzare i movimenti ed i risultati dei centri tipicamente movimentati a grandezze fisiche e quindi non economiche.

Dopo aver obbligatoriamente inserito un'area di analisi (ad esempio *Consuntivo*, piuttosto che *Budget*) e specificato il centro aziendale di riferimento (tipicamente un centro valorizzato a grandezze fisiche) ed attribuito un codice / descrizione alla tariffa, si procede inserendo il dettaglio.

Nel dettaglio è possibile specificare un periodo di validità della tariffa (ad esempio un *dodicesimo* riferito ad esempio alla distribuzione periodi che segue la regola dei dodicesimi) ed un valore per la quota fissa e variabile della tariffa stessa.

La quota fissa e variabile fanno riferimento alla ripartizione dei dati del controlling (già a partire dalla contabilità analitica) in costi fissi e costi variabili.

La ripartizione in quota fissa e variabile si imposta già a partire dal piano dei conti (a cui si rinvia) tramite il campo **Variabilità**.


:::tip Approfondimento
In base alla definizione della percentuale di variabilità ogni movimento economico che viene ripreso da una chiusura infrannuale viene suddiviso in quota fissa e/o variabile. Potrebbe essere dunque al 100% fisso, oppure al 100% variabile, oppure ad esempio al 40% fisso e 60% variabile. Le tariffe valorizzeranno dunque separatamente la componente fissa e variabile del costo.
:::
