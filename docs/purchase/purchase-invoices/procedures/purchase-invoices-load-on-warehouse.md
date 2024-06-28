---
title: Carico fatture di acquisto in magazzino
sidebar_position: 1
keywords:
- Fattura di acquisto
- Magazzino
---

La procedura si apre tramite il percorso **Acquisti > Fatture di acquisto > Procedure > Registrazione fatture di acquisto in magazzino**. 

Essa permette di eseguire/ripristinare le operazioni di registrazione automatica in magazzino degli articoli presenti nella fattura.

### Filtro

In questo tab, l'utente ha la possibilità di inserire filtri per cercare le fatture di acquisto, per selezionarle e dopo registrarle in magazzino.

**Data registrazione magazzino**: permette di specificare la data relativa alla registrazione in magazzino, se questa data non è già stata impostata in *[Parametri fatture di acquisto](/docs/configurations/parameters/purchase/purchase-invoices-parameters) > tab Carico* (più precisamente, flag attivo su *Crea registrazione con la data documento*).

*Pulsanti specifici*:

> **Ricerca**: permette di cercare le fatture da registrare in magazzino.  
> **Registrazione**: permette di eseguire la registrazione delle fatture selezionate in magazzino, in base agli algoritmi di carico e ai parametri inseriti nel successivo tab *Parametri*.

### Parametri

Se le righe fatture non abbiano il magazzino e la causale per il carico, attraverso questa maschera l'utente ha la possibilità di specificare per le righe articolo il modo di trattare le eccezioni.

Le opzioni disponibili sono:

- **Non effettuare la registrazione della fattura per intero**: non permette il carico parziale del documento;

- **Tralasciare l'articolo senza magazzino e causale**: permette il carico parziale del documento; 

- **Accettare come magazzino e causale i seguenti dati**: assicura il carico completo del documento. Per tutti gli articoli trovati senza magazzino e causale nelle fatture selezionate, imposta i dati inseriti subito dopo, nei campi: *Magazzino* e *Causale*.

*Pulsante specifico*

> **Salva parametri**: permette di salvare i parametri impostati per la registrazione.

Dopo aver selezionato le fatture (dal tab *Filtro*) e impostato i parametri, le fatture possono essere caricate con l'aiuto del pulsante *Registrazione*.

### Riepilogativo

In questo tab l'utente ha la possibilità di cercare, visualizzare e annullare le operazioni di registrazione eseguite, che soddisfano le condizioni specifiche di cancellazione delle registrazioni di magazzino.

I dati nelle griglie in basso, **Fatture** e **Registrazione**, corrispondono alla registrazione di carico selezionata nella griglia superiore (dopo aver filtrato i dati). Inoltre, in queste ultime due griglie, c'è la possibilità di visualizzare la fattura e la sua registrazione di magazzino (doppio click sulla riga).

*Pulsanti specifici*:
> **Ricerca**: per cercare le fatture caricati. Il risultato di questa procedura viene visualizzato nelle griglie di risultato.  
> **Cancella carico**: per cancellare l'intera registrazione di carico selezionata, con tutti i suoi dettagli visualizzati nelle due griglie sottostanti.  
> **Rollback fattura**: per cancellare il carico di un documento selezionato nella registrazione di carico. Questa operazione comporterà anche l'annullamento della registrazione di magazzino se corrisponde ad un solo documento oppure l'aggiornamento dei suoi dati se corrisponde a più fatture. 