---
title: Registrazione rientri
sidebar_position: 1
---

La form si apre tramite il percorso **Conto Lavoro > Rientri > Procedure > Registrazione rientri** e permette di registrare a magazzino i rientri di conto lavoro già controllati e non ancora registrati.

## Filtro

In questo tab, l'utente ha la possibilità di cercare e trasferire in magazzino i rientri, secondo i criteri di filtro disponibili. 
  

*Pulsanti specifici*:

> **Ricerca**: permette di applicare i filtri di ricerca all'intero database dei Rientri di Conto Lavoro inseriti, controllati e non ancora registrati;    
> **Scarico**: permette di eseguire lo scarico dei rientri selezionati dal magazzino, in base agli algoritmi di scarico.

*Campi specifici*:

**Numero doc. def.**: in questa colonna viene visualizzato il numero del rientro di conto lavoro;  
**Data doc. def.**: in questa colonna viene visualizzata la data del rientro di conto lavoro;  
**Data registrazione magazzino**: si trova nella zona inferiore della form ed è impostata di default sulla data corrente, ma può essere modificata.

Una volta selezionati i rientri di conto lavoro, utilizzare il tasto *Scarico* per eseguire i movimenti di magazzino: contestualmente a questa operazione l'applicazione esegue il carico sul magazzino di rientro degli articoli prodotti dal terzista, lo scarico dal magazzino del terzista dei materiali utilizzati e l'eventuale carico dei resi sull'apposito magazzino resi.

## Riepiloghi

In questo tab è possibile eseguire il 'rollback' dell'operazione di registrazione del rientro di conto lavoro, ripristinando quindi la situazione antecedente all'operazione stessa.

I dati nelle griglie in basso, **Rientri** e **Registrazioni**, corrispondono alla registrazione di scarico selezionata nella griglia superiore (dopo aver filtrato i dati).

*Pulsanti specifici*:
> **Ricerca**: per cercare i rientri scaricati. Il risultato di questa procedura viene visualizzata nella griglia di risultato, *Scarico rientri*;    
> **Ripristina**: Richiama la procedura che esegue il rollback dell'intera operazione di registrazione rientri selezionata nella griglia *Scarico rientri*; quindi se con la stessa operazione di registrazione sono stati registrati più rientri, tutti questi rientri saranno riportati nello stato di 'non caricati';  
> **Ripristina rientri**: richiama la procedura che esegue il rollback della registrazione dei soli rientri selezionati nella griglia inferiore, nel tab *Rientri*.