---
title: Parametri raggruppamento Ordini di acquisto
sidebar_position: 8
---

Con questi parametri vengono decise le regole di raggruppamento per la procedura:  
-  [**Creazione Ordini fornitori**](/docs/sales/sales-orders/search-sales-orders/) dal filtro di Ricerca Ordini Clienti   

Per la creazione di Ordini fornitori da Ordini clienti è tuttavia consigliato utilizzare la procedura di [creazione automatica ordini](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) con i relativi *Parametri*. 

:::note Nota
Se nell'anagrafica del fornitore, nel tab *Parametri raggruppamento per cliente/fornitore*, sono state inserite delle condizioni di raggruppamento differenti, queste avranno priorità rispetto ai parametri generali.
:::

Quando l'ordine fornitore viene creato a partire da un unico ordine cliente vengono riportati tutti i dati di testata presenti nel documento di partenza. Per gli ordini di acquisto creati da più ordini di vendita invece, vengono riportati i dati dell'anagrafica fornitore.    

*Campi specifici*:

> **Riepilogativa**: se attivo, al momento della creazione ordini fornitori a partire da più ordini clienti sarà creato un unico documento per fornitore. Se non è attivo sarà sempre creato un documento per ciascun ordine cliente. Il raggruppamento funziona solo per i [Tipi ordine cliente](/docs/configurations/tables/sales/sales-order-types/) che hanno codificato lo stesso *Tipo ordine fornitore* da creare. Tutti i flag successivi devono essere utilizzati in concomitanta con questo flag.    
>
> **Raggruppamento per tipo documento**: se attivo, saranno raggruppati in un unico ordine tutti i documenti che hanno lo stesso *Tipo Ordine Cliente*.     
>
> **Raggruppamento per anno**: attivando questo flag sarà effettuato un raggruppamento per anno di inserimento dell'ordine cliente.   
>
> **Raggruppamento per mese**: per poter effettuare un raggruppamento per mese di creazione dell'ordine è necessario attivare anche il flag precedente.    
>
> **Raggruppamento per cambio**: se attivo, i documenti con la stessa divisa e stesso cambio sranno raggruppati in un unico ordine di acquisto.    
>
> **Raggruppamento per ordine**: questo flag viene utilizzato solo per la *Creazione DDT e fatture di vendita da Picking* (vedi [Parametri raggruppamento DDT](/docs/configurations/parameters/sales/dn-grouping) e [fatture](/docs/configurations/parameters/sales/invoice-grouping)), dunque in questa procedura non ha significato.    
>
> **Raggruppamento per progetto**: attivando questo flag sarà effettuato un raggruppamento per progetto. Il raggruppamento funziona anche per i progetti inseriti a livello di riga articolo; se alcune delle righe articolo non hanno un progetto associato sarà creato un ordine diverso per tutti gli articoli che non lo contengono. Quando il progetto è stato inserito nella testata dei documenti di origine esso sarà riportato anche nella testata dei documenti di destinazione, in alternativa sarà mantenuto solo sulle righe articolo.    
>
> **Raggruppamento per tipo e soluzione di pagamento**: attivando questo flag sarà effettuato un raggruppamento sulla base del tipo e della soluzione di pagamento inserito nell'ordine cliente; tale dato sarà riportato nella testata dell'ordine fornitore creato.   
>
> **Raggruppamento per destinazione**: attivando questo flag sarà effettuato un raggruppamento sulla base della destinazione inserita all'interno dell'ordine cliente nel tab *Destinazione*; tale dato sarà riportato nella testata dell'ordine fornitore creato.     