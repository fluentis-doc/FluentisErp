---
title: Parametri raggruppamento DDT di acquisto
sidebar_position: 10
---

I parametri di raggruppamento consentono di definire come suddividere i documenti durante le procedure di evasione. A tal fine, è possibile utilizzare specifici flag per raggruppare i documenti in base a diverse proprietà, come ad esempio la categoria, il tipo di documento, o altre caratteristiche rilevanti.            
Questi parametri generali di raggruppamento devono essere configurati una sola volta e saranno applicati automaticamente a tutte le procedure, risultando validi per tutti i clienti e fornitori. Tuttavia, se un cliente o un fornitore richiede un comportamento diverso rispetto a quello impostato nei parametri generali, sarà necessario personalizzare i parametri di raggruppamento all'interno della loro specifica anagrafica.           
In questo modo, si garantisce una gestione flessibile e adattabile delle evasioni, permettendo di soddisfare le esigenze specifiche di ogni cliente o fornitore, pur mantenendo una configurazione centralizzata e coerente per la maggior parte delle operazioni.

In questa maschera vengono decise le regole di raggruppamento per la procedura di [**Evasione da ordini**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).  

E' necessario selezionare le colonne che prevedono i raggruppamenti che si vogliono prevedere per queste evasioni. 

:::note Nota
Se nell'anagrafica del fornitore, nel tab *Parametri raggruppamento per cliente/fornitore*, sono state inserite delle condizioni di raggruppamento differenti, queste avranno priorità rispetto ai parametri generali.
:::

Quando il DDT viene creato a partire da un unico ordine vengono riportati tutti i dati di testata presenti nel documento di partenza. Per i DDT creati da più ordini invece, vengono riportati i dati dell'anagrafica fornitore.    

#### Campi specifici

- **Riepilogativa**: se attivo, al momento dell'evasione ordini sarà creato un unico DDT per fornitore. Se non è attivo sarà sempre creato un DDT per ciascun ordine evaso. Il raggruppamento funziona solo per i *Tipi ordine* (di Acquisto o di Vendita, a seconda dell'operazione selezionata) che hanno codificato lo stesso *Tipo DDT* da creare. Tutti i flag successivi devono essere utilizzati in concomitanza con questo flag.    

- **Raggruppamento per tipo documento**: se attivo, saranno raggruppati in un unico DDT tutti i documenti che hanno lo stesso *Tipo ordine*.     

- **Raggruppamento per anno**: attivando questo flag sarà effettuato un raggruppamento per anno di creazione degli ordini.   

- **Raggruppamento per mese**: per poter effettuare un raggruppamento per mese di creazione degli ordini è necessario attivare anche il flag precedente.    

- **Raggruppamento per cambio**: se attivo, i documenti con la stessa divisa e stesso cambio saranno raggruppati in un unico DDT.    

- **Raggruppamento per ordine**: questo flag viene utilizzato solo per la *Creazione DDT e fatture di vendita da Picking* (vedi [Parametri raggruppamento DDT](/docs/configurations/parameters/sales/dn-grouping) e [fatture](/docs/configurations/parameters/sales/invoice-grouping)).    

- **Raggruppamento per progetto**: attivando questo flag sarà effettuato un raggruppamento per progetto. Il raggruppamento funziona anche per i progetti inseriti a livello di riga articolo; se alcune delle righe articolo non hanno un progetto associato sarà creata un DDT diverso per tutti gli articoli che non lo contengono. Quando il progetto è stato inserito nella testata dei documenti di origine esso sarà riportato anche nella testata dei documenti di destinazione, in alternativa sarà mantenuto solo sulle righe articolo.    

- **Raggruppamento per tipo e soluzione di pagamento**: attivando questo flag sarà effettuato un raggruppamento sulla base del tipo e della soluzione di pagamento inserito nell'ordine; tale dato sarà riportato nella testata del DDT creato.   

- **Raggruppamento per destinazione**: attivando questo flag sarà effettuato un raggruppamento sulla base della destinazione inserita all'interno degli ordini; tale dato sarà riportato nella testata del DDT creato, nel tab *Trasporto*.     