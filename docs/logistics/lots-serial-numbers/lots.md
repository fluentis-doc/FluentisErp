---
title: "Ricerca lotti"
sidebar_position: 2
description: "Guida alla funzione di ricerca e gestione dei lotti all’interno del modulo Logistica di Fluentis ERP."
schema: "HowTo"
tags: ["ERP", "Logistica", "Lotti", "Gestione magazzino", "Ricerca lotti"]
last_update: "07-11-2025"
author: "Fluentis Documentation Team"
keywords: ["ricerca lotti", "lotto ERP", "fluentis logistica", "gestione magazzino"]
---

# Ricerca lotti

La form si apre tramite il percorso **Logistica > Anagrafica lotti** e consente di ricercare, visualizzare e modificare i lotti presenti nel sistema.

## Come effettuare una ricerca

1. Impostare i filtri desiderati nella maschera di ricerca.  
2. Cliccare sul pulsante **Ricerca** presente nella *Ribbon bar* per visualizzare i risultati nella griglia.  
3. Per aprire i dettagli di un lotto, selezionarlo e fare doppio clic con il mouse oppure cliccare sul pulsante **Modifica**.

:::important
È possibile modificare o eliminare solo i lotti non referenziati in altri documenti.
:::

## Pulsanti specifici

> **Modifica**: il pulsante permette di [Modificare un lotto inserito](/docs/logistics/lots-serial-numbers/lots-register);    
> **Cancella**: permette la cancellazione del lotto se questo non è referenziato in alcun documento. 

## Filtri specifici  

- **Tutti**: attivando questo flag l'utente può filtrare tutti i lotti presenti nel database;  
- **Non chiusi**: attivando questo flag l'utente può filtrare solo i lotti aperti, ovvero solo i lotti di cui esiste ancora una giacenza a magazzino;  
- **Chiusi**: attivando questo flag l'utente può filtrare solo i lotti chiusi, ovvero solo i lotti la cui giacenza risulta uguale a zero.  

## Campi specifici

> *Nota*: cliccare sul segno **+** per aprire il dettaglio della riga.

- **Chiuso**: il flag, se attivo, evidenzia che la giacenza è uguale a zero;  
-**Quantità**: visualizza la quantità iniziale del lotto per ciascun magazzino;  
-**Quantità disponibile**: visualizza la quantità disponibile per ciascun magazzino del lotto, ossia la quantità in giacenza meno la quantità impegnata nei vari documenti. La quantità disponibile può anche essere visualizzata come uguale a zero nel caso in cui il lotto si trovi in uno stato 'non disponibile per prelievi automatici';  
- **Stato lotto**: visualizza lo stato del lotto. Si tratta di un dato che potrebbe anche non essere gestito;  
- **Magazzino**: visualizza il codice del magazzino su cui si trova il lotto.

## Riepilogo e approfondimenti

La funzione **Ricerca lotti** consente di individuare rapidamente i lotti registrati, filtrandoli in base allo stato e alla disponibilità.  
È possibile accedere ai dettagli di ciascun lotto, modificarne le informazioni o eliminarlo, rispettando le condizioni di referenziazione.

Per approfondire:
- [Registrazione e modifica dei lotti](/docs/logistics/lots-serial-numbers/lots-register)  
- [Funzionalità comuni delle form](/docs/guide/common)
