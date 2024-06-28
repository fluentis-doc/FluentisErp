---
title: Evasione DDT di acquisto da ordini
sidebar_position: 3
keywords:
- DDT
- Ordini
---

Permette l'evasione degli articoli degli ordini, con la generazione automatica delle DDT di acquisto raggruppate per fornitore e del loro carico in magazzino.

La procedura si apre tramite il percorso **Acquisti > DDT di acquisto > Procedure > Evasione DDT da ordini**

*Pulsanti specifici*

> **Ricerca**: permette di cercare gli articoli in base ai filtri inseriti;  
> **Trasferimento**: permette di trasferire gli articoli selezionati;  
> **Seleziona tutt**: permette di selezionare tutti gli articoli dalla griglia di risultati;  
> **Deseleziona tutti**: permette di deselezionare tutti gli articoli dalla griglia di risultati.  

*Procedimento* per la creazione del DDT e della registrazione in magazzino:  
- inserire i filtri desiderati nella sezione *Filtro* e clicare sul pulsante **Ricerca**. Nella griglia dei risultati  comparirà una riga per ciascun articolo-ordine stampato, confermato e non evaso oppure evaso parzialmente;  
- selezionare l'articolo desiderato, mettendo il flag nella colonna **Seleziona**;  
- inserire, per l'articolo selezionato, la **Quantità da evadere** nella colonna omonima. Se la quantità non viene inserita, l'applicazione propone il valore inserito nella colonna **Quantità**;  
- eseguire l'evasione con l'aiuto del pulsante **Trasferimento**;  
- confermare o no la modifica del DDT nel messaggio lanciato dall'applicazione:  
   - se si sceglie **No**, la procedura esegue in automatico la registrazione in magazzino e crea la DDT, riprendendo tutti i dati presenti per l'articolo e, come conseguenza, nel DDT saranno applicate le condizioni di acquisto presenti per l'articolo;  
   - se si sceglie **Sì**, la procedura apre la sezione degli articoli del DDT di acquisto per:

    > 1. modificare i dati;  
    > 2. confermare le modifiche con il pulsante **Conferma**;  
    > 3. modificare anche il prossimo oggetto del DDT (se sono stati selezionati più articoli per la modifica);  
    > 4. chiudere la form. La procedura crea la DDT ed esegue in automatico la registrazione in magazzino con i dati appena modificati.

Le due operazioni possono essere annullate nella procedura  [Registrazione DDT di Acquisto in Magazzino](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) 
