---
title: Scarico DDT da magazzino
sidebar_position: 1
---

La procedura massiva si apre tramite il percorso **Vendite > DDT > Procedure > Scarico DDT da magazzino**. 

Questa procedura permette di eseguire/ripristinare le operazioni di scarico automatico dal magazzino degli articoli presenti nel DDT.    
Ricordiamo che la procedura può essere eseguita anche all'interno della [Testata](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del singolo DDT con il pulsante [Scarico automatico](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn). 

La procedura massiva è composta da tre tab che analizziamo di seguito. 

### Filtro

In questo tab, l'utente ha la possibilità di cercare e trasferire i DDT che hanno impostato al loro interno il flag *Stampata* e quindi sono pronti per lo scarico.     

*Pulsanti specifici*:

> **Ricerca**: permette di cercare i DDT da scaricare.  
> **Scarico**: permette di eseguire lo scarico dei DDT selezionati dal magazzino, in base agli algoritmi di scarico e ai parametri inseriti nel successivo tab *Parametri*.


### Parametri

In questa maschera, l'utente ha la possibilità di specificare, per le righe articolo, il modo di trattare le eccezioni.

In questo caso se le righe del DDT non hanno specificato il magazzino e la causale per lo scarico, le opzioni disponibili sono:

- **Non effettuare lo scarico del DDT per intero**: non permette lo scarico parziale del DDT.     
- **Tralasciare l'articolo senza magazzino e causale**: permette lo scarico parziale del documento.       
- **Accettare come magazzino e causale i seguenti dati**: per tutti gli articoli trovati senza magazzino e causale nei DDT selezionati nella parte dei filtri, imposta i dati inseriti subito dopo, nei campi: *Magazzino* e *Causale* (assicura lo scarico completo del documento).

*Pulsante specifico*

> **Salva parametri**: permette di salvare i parametri impostati per la registrazione.

Dopo aver selezionato i DDT (dal tab *Filtro*) e impostato i parametri, i DDT possono essere scaricati con l'aiuto del pulsante *Scarico*.

### Riepilogativo

In questo tab, l'utente ha la possibilità di cercare, visualizzare e annullare le operazioni di scarico eseguite, che soddisfano le condizioni specifiche di cancellazione delle registrazioni di magazzino.

I dati nelle griglie in basso, **DDT** e **Registrazione**, corrispondono alla registrazione di scarico selezionata nella griglia superiore (dopo aver filtrato i dati). Inoltre, in queste ultime due griglie, c'è la possibilità di visualizzare il DDT e la sua registrazione di magazzino (doppio click sulla riga).

*Pulsanti specifici*:
> **Ricerca**: per cercare i DDT scaricate. Il risultato di questa procedura viene visualizzata nella griglia di risultato.  
> **Cancella**: per cancellare per intero le operazioni di scarico selezionate nella griglia di risultato, se soddisfano le condizioni specifiche di cancellazione delle registrazioni di magazzino.  
> **Ripristina DDT**: per cancellare le operazioni di scarico selezionate nella griglia di risultato, per la DDT in uso nella griglia dei dettagli.