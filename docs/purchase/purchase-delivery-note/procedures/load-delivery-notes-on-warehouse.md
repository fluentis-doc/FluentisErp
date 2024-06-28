---
title: Registrazione DDT di acquisto in magazzino
sidebar_position: 1
keywords:
- DDT
- Magazzino
---

Permette di eseguire/ripristinare le operazioni di registrazione automatica in magazzino degli articoli presenti nel DDT.

La procedura si apre tramite il percorso **Acquisti > DDT di acquisto > Procedure > Registrazione DDT di acquisto in magazzino**. 

### Filtro

Offre la possibilità di inserire i filtri per cercare i DDT di acquisto, per selezionarli e dopo registrarli in magazzino.

**Data registrazione magazzino**: permette di specificare la data relativa alla registrazione in magazzino, se questa data non è già stata impostata in *[Parametri DDT di acquisto](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) > tab Carico* (più precisamente, flag attivo su *Crea registrazione con la data documento*).

*Pulsanti specifici*:

> **Ricerca**: permette di cercare i DDT da registrare in magazzino.
> **Registrazione**: permette di eseguire la registrazione dei DDT selezionate in magazzino, in base agli algoritmi di carico e ai parametri inseriti nel successivo tab *Parametri*.


### Parametri

Se le righe DDT non abbiano il magazzino e la causale per il carico, attraverso questa maschera l'utente ha la possibilità di specificare per le righe articolo il modo di trattare le eccezioni.

Le opzioni disponibili sono:

- **Non effettuare la registrazione del DDT per intero**: non permette il carico parziale del documento;

- **Tralasciare l'articolo senza magazzino e causale**: permette il carico parziale del documento; 

- **Accettare come magazzino e causale i seguenti dati**: assicura il carico completo del documento. Per tutti gli articoli trovati senza magazzino e causale nei DDT selezionati, imposta i dati inseriti subito dopo, nei campi: *Magazzino* e *Causale*.

*Pulsante specifico*

> **Salva parametri**: permette di salvare i parametri impostati per la registrazione.

### Riepilogativo

In questo tab l'utente ha la possibilità di cercare, visualizzare e annullare le operazioni di registrazione eseguite, che soddisfano le condizioni specifiche di cancellazione delle registrazioni di magazzino.

I dati nelle griglie in basso, **DDT** e **Registrazione**, corrispondono alla registrazione di carico selezionata nella griglia superiore (dopo aver filtrato i dati). Inoltre, in queste ultime due griglie, c'è la possibilità di visualizzare il DDT e la sua registrazione di magazzino (doppio click sulla riga).

*Pulsanti specifici*:
> **Ricerca**: per cercare i DDT caricati. Il risultato di questa procedura viene visualizzato nelle griglie di risultato.  
> **Cancella registrazioni**: per cancellare l'intera registrazione di carico selezionata, con tutti i suoi dettagli visualizzati nelle due griglie sottostanti.  
> **Annulla DDT**: per cancellare il carico di un documento selezionato nella registrazione di carico. Questa operazione comporterà anche l'annullamento della registrazione di magazzino se corrisponde ad un solo DDT oppure l'aggiornamento dei suoi dati se corrisponde a più DDT.  
