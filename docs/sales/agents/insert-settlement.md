---
title: Nuova Liquidazione
sidebar_position: 3
---
La form si apre tramite il percorso *Vendite > Agenti > Liquidazioni agenti > Ricerca liquidazioni agenti* con click sul pulsante **Nuovo**.

L'inserimento di una liquidazione richiede: 
- l'agente intestatario della liquidazione (che deve avere il tipo e soluzione di pagamento di default nella sua anagrafica), 
- il numero e l'anno vengono compilati in automatico,
- la data della liquidazione (viene proposta la data corrente), 
- la descrizione della liquidazione (ad es.: liquidazione primo trimestre 2012), 
- il mese/anno di riferimento per il calcolo Enasarco.

## Liquidazioni

### Riepilogativa

Questo tab presenta tutti gli elementi di calcolo della provvigione.  

**Riepilogo provvigioni**: in questa griglia sono presenti, divisa per divisa, i totali delle provvigioni liquidate. Al di sotto di questa, sono presenti i campi con la *Divisa* di riferimento della liquidazione (proposta dalla divisa inserita in anagrafica dell'agente), il *Cambio* e la *Data valuta* per il cambio; più in basso l'*IVA* da applicare all'imponibile provvigionale (anche questa proposta di default dall'anagrafica agente) e il *Totale documento*.

**Riepilogo calcolo ritenuta**: la griglia consente di visualizzare i compensi percipienti da considerare acconti sulla liquidazione in uso, il *Tipo di ritenuta* da applicare (anche questa ripresa prioritariamente dall'anagrafica agente o dalla categoria agente), le relative percentuali e gli importi per la ritenuta.

Nel caso in cui sia impostato il *Calcolo manuale*, sarà possibile forzare i dati relativi alla sezione di gestione delle ritenute.

### Pagamenti

In questa tab il gestionale riporta in **Lista pagamenti** le impostazioni di pagamento di default inserite in anagrafica dell'agente, che sono comunque modificabili.

Nella griglia **Lista scadenze** sono calcolate le scadenze relative: si ricorda che l'importo delle scadenze andrà allineato manualmente alle modifiche apportate alla liquidazione, facendo corrispondere queste al dato dell'importo a pagare.


*Pulsanti specifici*:

> **Inserisci pagamenti**: imposta il cursore all'inserimento di una nuova riga all'interno delle tipologie di pagamento.  
> **Cancella pagamenti**: esegue la cancellazione delle impostazioni di pagamento selezionate.  
> **Inserisci scadenze**: imposta il cursore all'inserimento di una nuova riga all'interno delle scadenze della liquidazione.  
> **Cancella scadenze**: esegue la cancellazione delle scadenze selezionate.

## Fatture/DDT/Ordini

In base al *Tipo di documento considerato per l'imponibile provvigionale* inserito nell'*Anagrafica dell'agente* viene visualizzato il secondo tab con i documenti: Fatture oppure DDT oppure ordini.

All'interno della griglia superiore, una volta eseguita la ricerca, sono visualizzati i documenti conteggiati per il calcolo della liquidazione agente in uso.

Attraverso i due pulsanti di gestione: **Collegamento documenti con la liquidazione** e **Cancella collegamenti con la liquidazione** è possibile aggiungere manualmente nuovi documenti nella liquidazione oppure cancellarli per inserirli in una successiva.

*Pulsanti specifici*:

> **Ricerca**: esegue la ricerca dei documenti inseriti nella liquidazione in uso.  
> **Collegamento documenti con la liquidazione**: apre una maschera di ricerca e inserimento manuale di documenti nella liquidazione in uso.  
> **Cancella collegamenti con la liquidazione**: toglie il documento selezionato dalla liquidazione in uso.  