---
title: U.M alternativa
sidebar_position: 20.1
---

In questo tab viene indicata, dove fosse necessaria, l'unità di misura alternativa dell'articolo. 

L'articolo può essere gestito in entrambe le unità di misura e creando delle relazioni tra le due.

**Unità di misura** e **Descrizione**: si indicherà quindi l'unità di misura alternativa con la sua descrizione;

**Fattore di conversione**: qui si va a definire il fattore di conversione tra l'unità di misura principale e l'unità di misura alternativa; la *quantità alternativa* nei documenti viene calcolata in base al settaggio effettuato nei [Parametri iniziali di magazzino](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)

**Default**: se attivo, questo flag indica qual'è l'unità di misura di riferimento tra N alternative possibili per articolo;

**Tassativa**: se attivo, questo flag determina l'invariabilità del fattore di conversione. Quando si va a inserire l'unità di misura gestionale tramite il fattore di conversione il sistema calcoli automaticamente l'unità di misura alternativa, e viceversa. Se flag Tassativa non è attivo, quell'unità di misura alternativa si può impostare come unità di misura primaria, indipendentemente dal flag **Prioritaria**;     

**Prioritaria**: se attivo, l’aggiornamento della *quantità gestionale* non cambia la *quantità alternativa* perché quest’ultima ha la priorità, mentre nel caso in cui venga modificata la *quantità alternativa*, la *quantità gestionale* viene ricalcolata in funzione della quantità alternativa sulla base del fattore di conversione;       

**Default WMS**: se attivo, indica che questa unità di misura sarà quella utilizzata di default all'interno del WMS.

