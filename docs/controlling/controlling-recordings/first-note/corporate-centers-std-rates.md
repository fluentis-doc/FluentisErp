---
title: Tariffe standard centri aziendali
sidebar_position: 3
---

In questa form è possibile inserire (tramite il tasto **Nuovo**) delle tariffe standard fisse, non calcolate tramite quozienti definiti tra il risultato di un modello di riclassificazione ed il risultato di un centro aziendale.

Tali tariffe saranno poi utilizzate dai cost driver (in particolare dal criterio di distribuzione *Reversione su produzione a tariffa standard*) per valorizzare i movimenti ed i risultati dei centri tipicamente movimentati a grandezze fisiche e quindi non economiche.

Per codificare una tariffa fissa dovremo inserire:
- una ***Area*** di analisi (ad esempio *Consuntivo*, piuttosto che *Budget*) 
- il ***Centro aziendale*** di riferimento (tipicamente un centro valorizzato a grandezze fisiche)
- un ***Codice*** della tariffa
- una ***Descrizione*** della tariffa.

Nella griglia sottostante andremo poi ad inserire i dettagli della tariffa:
- L'***Anno*** di riferimento
- il range ***Periodo da*** e ***Periodo a***
- il ***Valore fisso*** della tariffa
- il ***Valore variabile*** della tariffa

La quota fissa e variabile fa riferimento alla ripartizione dei dati del controlling in costi fissi e costi variabili, che si imposta già a partire dal *Piano dei conti* tramite il campo **Variabilità** e la tabella **Variabilità centri di costo**.


:::tip Approfondimento
In base alla definizione della percentuale di variabilità ogni movimento economico che viene ripreso da una chiusura infrannuale viene suddiviso in quota fissa e/o variabile. Potrebbe essere dunque al 100% fisso, oppure al 100% variabile, oppure ad esempio al 40% fisso e 60% variabile. Le tariffe valorizzeranno dunque separatamente la componente fissa e variabile del costo.
:::
