---
title: Scarico fatture di vendita dal magazzino
sidebar_position: 2
---

La procedura si apre tramite il percorso **Vendite > DDT > Procedure > Scarico fatture da magazzino**. 

Questa procedura permette di eseguire/ripristinare le operazioni di scarico automatico dal magazzino degli articoli presenti nella fattura. 

:::tip Ricorda
Se il documento contiene **articoli fittizi**, la procedura terrà conto della *Tipologia di approvvigionamento* definita nei Parametri MRP dell’articolo:
- Gli articoli di tipo *Acquisto* non verranno inseriti nella registrazione di magazzino.   
- Gli articoli di tipo *Produzione* o *Conto Lavoro* verranno registrati in magazzino con il primo livello della distinta base.
:::

### Filtro

In questo tab, l'utente ha la possibilità di cercare e di trasferire le fatture che hanno impostato al loro interno il flag *Stampata*.

**Data registrazione magazzino**: permette di specificare la data relativa allo scarico dal magazzino, tranne l'impostazione del *Crea la registrazione con la data documento* nei *Parametri fatture di vendita > tab Scarico*.

*Pulsanti specifici*:

> **Ricerca**: permette di cercare le fatture da scaricare.  
> **Scarico**: permette di eseguire lo scarico delle fatture selezionate dal magazzino, in base agli algoritmi di scarico e ai parametri inseriti nel successivo tab *Parametri*. 

:::note NOTA
Possono essere movimentate a magazzino solo le fatture di tipo Immediato che non derivano da DDT.

Quando la fattura è generata a partire da DDT, è necessario procedere con lo scarico dei documenti di trasporto. Una volta che tutti i DDT valorizzati nella fattura risultano scaricati, l’attivazione del flag *Stampata* in fattura comporterà anche l’attivazione automatica del flag *Scaricata*.

Eccezione: se nel tipo fattura è attivo il flag [*Scollega DDT*](/docs/configurations/tables/sales/invoices-type), sarà possibile movimentare a magazzino anche la fattura di vendita.

Le fatture non immediate, invece, non possono mai essere movimentate a magazzino: di conseguenza, il flag Scaricata non si attiverà nemmeno dopo lo scarico di tutti i DDT in esse contenuti.
:::

### Parametri

In questa maschera, l'utente ha la possibilità di specificare, per le righe articolo, il modo di trattare le eccezioni.

In questo caso, se le righe fattura non hanno specificato il magazzino e la causale per lo scarico le opzioni disponibile sono:

- **Non effettuare lo scarico della fattura per intero**: non permette lo scarico parziale del DDT;

- **Tralasciare l'articolo senza magazzino e causale**: permette lo scarico parziale del documento;

- **Accettare come magazzino e causale i seguenti dati**: per tutti gli articoli trovati senza magazzino e causale nelle fatture selezionate nella sezione dei filtri, imposta i dati inseriti subito dopo, nei campi: *Magazzino* e *Causale* (assicura lo scarico completo del documento).

*Pulsante specifico*

> **Salva parametri**: permette di salvare i parametri impostati per la registrazione.

Dopo aver selezionato le fatture (dal tab *Filtro*) e impostato i parametri, le fatture possono essere scaricate con l'aiuto del pulsante *Scarico*.

### Riepilogativo

In questo tab, l'utente ha la possibilità di cercare, visualizzare e annullare le operazioni di scarico effettuate, che soddisfano le condizioni specifiche di cancellazione delle registrazioni di magazzino.

I dati nelle griglie in basso, **Fatture** e **Registrazione**, corrispondono alla registrazione di scarico selezionata nella griglia superiore (dopo aver filtrato i dati). Inoltre, in queste ultime due griglie, c'è la possibilità di visualizzare la fattura e la sua registrazione di magazzino (doppio click sulla riga).

*Pulsanti specifici*:
> **Ricerca fatture scaricate**: per  cercare le fatture scaricate. Il risultato di questa procedura viene visualizzata nella griglia di risultato.  
> **Cancella scarico**: per  cancellare per intero le operazioni di scarico selezionate nella griglia di risultato.  
> **Ripristina fatture**: per  cancellare le operazioni di scarico selezionate nella griglia di risultato, per la fattura in uso nella griglia dei dettagli.



<iframe width="560" height="315" src="https://www.youtube.com/embed/MWEUxnmD1hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>