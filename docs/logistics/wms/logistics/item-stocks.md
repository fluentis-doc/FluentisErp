---
title: Giacenza articolo
sidebar_position: 5
---

Questa procedura è utilizzata per visualizzare la giacenza di un articolo.     
La form presenta una griglia che muta le proprie colonne sulla base dei filtri inseriti per la ricerca. 

Le colonne facenti riferimento alla giacenza sono tre: 
- *Giacenza (Gest.)* - (gestionale) 
- *Giacenza*  
- *Giacenza(FC)* - (FC = Fattore di conversione)

Nel caso di utilizzo della **UM Def. WMS** (presente nel tab [Unità di misura alternative dell'anagrafica articolo](/docs/erp-home/registers/items/create-new-items/item-registry/alternative-um), la prima risulta valorizzata con l'unità di misura principale dell'articolo, la seconda risulta popolata con la giacenza espressa nell'unità di misura alternativa dell'articolo e data dalla somma dei movimenti, mentre la terza è data dalla giacenza espressa nell'unità di misura alternativa ma calcolata con il fattore di conversione.
Nel caso in cui, il flag **UM Def. WMS** non sia abilitato, le colonne *Giacenza* e *Giacenza(FC)* non verranno valorizzate.

**Parametri carico/scarico** da inserire nella tabella [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Modulo | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | ItemStocks |

Questo parametro va inserito solo se si vuole filtrare le giacenze per uno specifico magazzino (la casuale può essere lasciata vuota), altrimenti se non viene inserito verranno visualizzare le giacenze di tutti i magazzini.

:::note Nota
Se nei [Parametri Carico/Scarico per utente](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) è associato per quell’utente un solo magazzino viene proposto di default quello, altrimenti se ce ne sono associati più di uno, di default non ne viene proposto nessuno e l’utente può scegliere solamente tra uno di quelli inseriti.
:::

Per tutte le informazioni su come codificare i barcode da leggere nel campo **Codice barcode** consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
