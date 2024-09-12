---
title: Registrazione DDT di acquisto in magazzino
sidebar_position: 1
keywords:
- DDT
- Magazzino
---

La procedura si apre tramite il percorso **Acquisti > DDT di acquisto > Procedure > Registrazione DDT di acquisto in magazzino** e permette di eseguire/ripristinare le operazioni di carico in magazzino degli articoli presenti nel DDT.

### Filtro

Offre la possibilità di inserire i filtri per cercare i DDT di acquisto, per selezionarli e dopo registrarli in magazzino.

- **Data registrazione magazzino**: permette di specificare la data relativa alla registrazione in magazzino.

:::important Ricorda
Se nei [Parametri DDT di acquisto](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters#carico) > tab Carico il flag **Crea registrazione con la data del documento** è attivo, la registrazione di magazzino sarà sempre eseguita con la data del documento, ignorando la *Data registrazione magazzino* inserita in questa form.    
Se il flag nei parametri non è attivo, sarà utilizzata la *Data carico* inserita manualmente nella testata del DDT.   
Se la *Data carico* non è valorizzata la registrazione di magazzino sarà creata con la *Data registrazione magazzino* inserita in questa form.
:::

*Pulsanti specifici*:

> **Ricerca**: permette di cercare i DDT da registrare in magazzino.   
> **Registrazione**: permette di eseguire il carico a magazzino dei DDT selezionati nella griglia superiore.


### Parametri

Se alcune righe rticolo del DDT non hanno il magazzino e la causale per il carico, attraverso questa maschera l'utente ha la possibilità di scegliere il modo in cui trattare le eccezioni.

Le opzioni disponibili sono:

- **Non effettuare la registrazione del DDT per intero**: non permette il carico parziale del documento;   
- **Tralasciare l'articolo senza magazzino e causale**: permette il carico parziale del documento;    
- **Accettare come magazzino e causale i seguenti dati**: assicura il carico completo del documento. Per tutti gli articoli trovati senza magazzino e causale nei DDT selezionati, imposta i dati inseriti subito dopo, nei campi: *Magazzino* e *Causale*.

:::important Ricorda
Se nei [Parametri DDT di acquisto](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters#carico) > tab Carico il flag **Priorità magazzino e causale di carico** è attivo, saranno sempre utilizzati il *Magazzino* e la *Causale* inseriti nei parametri, ignorando quelli presenti nel DDT per ciascuna riga articolo.
:::

*Pulsante specifico*

> **Salva parametri**: permette di salvare i parametri impostati per la registrazione.

### Riepilogativo

In questo tab l'utente ha la possibilità di cercare, visualizzare e annullare le operazioni di registrazione eseguite, sia quelle effettuate mediante l'utilizzo di questa procedura, che quelle effettuate dall'interno del documento mediante il pulsante di *Carico automatico*.

I dati nelle griglie inferiori, **DDT** e **Registrazione**, corrispondono alla registrazione di carico selezionata nella griglia superiore (dopo aver filtrato i dati). In queste due griglie c'è la possibilità di visualizzare il DDT e la sua registrazione di magazzino mediante un doppio click sulla riga.

*Pulsanti specifici*:
> **Ricerca**: per cercare i DDT caricati. Il risultato di questa procedura viene visualizzato nelle griglie di risultato.  
> **Cancella registrazioni**: per effettuare il ripristino dell'intera registrazione di carico selezionata.   
> **Annulla DDT**: per cancellare il carico di un documento selezionato nella registrazione di carico. Questa operazione comporterà anche l'annullamento della registrazione di magazzino se corrisponde ad un solo DDT oppure l'aggiornamento dei suoi dati se corrisponde a più DDT.  
