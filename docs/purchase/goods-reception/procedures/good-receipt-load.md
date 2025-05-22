---
title: Carico Ricevimento Merci
sidebar_position: 4
---

La procedura si apre tramite il percorso **Acquisti > Ricevimento merci > Carico ricevimento merci** e permette di eseguire/ripristinare le operazioni di registrazione in magazzino degli articoli presenti nel *Ricevimento merci*.

La maschera si compone di tre tab: *Filtro*, *Parametro* e *Rollback*.     

### 1. Filtro

In questo tab, l'utente ha la possibilità di inserire filtri per cercare il ricevimento merci da caricare in magazzino.   
È possibile filtrare per: *Fornitore*, *Numero ricevimento*, *Da/A data ricevimento*.

- **Data registrazione**: permette di specificare la data relativa alla registrazione in magazzino.

:::important Ricorda
Se nei [Parametri ordini fornitori](/docs/configurations/parameters/purchase/purchase-orders-parameters) > tab Carico il flag **Crea registrazione con la data del documento** è attivo, la registrazione di magazzino sarà sempre eseguita con la *Data ricevimento* inserita nella testata del documento, ignorando la *Data registrazione magazzino* inserita in questa form.    
Se la *Data carico* non è valorizzata la registrazione di magazzino sarà creata con la *Data registrazione magazzino* inserita in questa form oppure con la data corrente, se il campo *Data registrazione* non è valorizzato.
:::

#### Pulsanti specifici  
> **Ricerca**: permette di cercare i ricevimenti da registrare in magazzino.  
> **Carico**: permette di eseguire il carico dei ricevimenti selezionati, in base ai parametri inseriti nel tab successivo.


### 2. Parametri

Nel tab *Parametri* è possibile scegliere, con i relativi flag, come trattare eventuali articoli non codificati oppure senza magazzino e causale presenti all'interno del documento. Le opzioni disponibili sono:  

- **Ignora il ricevimento contenente articoli non codificati**: non permette il carico parziale del documento se questo contiene almeno un articolo non codificato.       
- **Ignora gli articoli non codificati del ricevimento**: permette il carico parziale del documento tralasciando gli articoli non codificati.  


- **Ignora il ricevimento contenente articoli senza mag./caus.**: non permette il carico parziale del documento se questo contiene almeno un articolo senza magazzino e causale.      
- **Ignora gli articoli del ricevimento senza mag./caus.**: permette il carico parziale del documento tralasciando gli articoli che non hanno magazzino e causale.     
- **Utilizza i seguenti valori per gli articoli senza mag./caus.**: assicura il carico completo del documento. Per tutti gli articoli trovati senza magazzino e causale nei ricevimenti selezionati, imposta i dati inseriti ne campi sottostanti: *Magazzino* e *Causale*.

:::important Ricorda
Se nei [Parametri ordini fornitori](/docs/configurations/parameters/purchase/purchase-orders-parameters) > tab Carico il flag **Priorità magazzino e causale di carico** è attivo, saranno sempre utilizzati il *Magazzino* e la *Causale* inseriti nei parametri, ignorando quelli presenti nel ricevimento merci per ciascuna riga articolo, altrimenti avranno priorità quelli inseriti nel documento.  
:::

### 3. Rollback

In questo tab l'utente ha la possibilità di cercare, visualizzare e annullare le operazioni di registrazione eseguite.

I dati nelle griglie in basso, **Ricevimento merci** e **Registrazione**, corrispondono alla registrazione di carico selezionata nella griglia superiore (dopo aver filtrato i dati). Inoltre, in queste ultime due griglie, c'è la possibilità di visualizzare il ricevimento merci e la sua registrazione di magazzino mediante doppio click sulla riga.

#### Pulsanti specifici  
> **Ricerca**: permette di cercare le fatture caricate. Il risultato di questa procedura viene visualizzato nelle griglie di risultato.  
> **Rollback**: permette di cancellare l'intera registrazione di carico selezionata.  