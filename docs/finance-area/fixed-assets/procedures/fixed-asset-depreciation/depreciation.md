---
title: Ammortamento
sidebar_position: 2
---

Innanzitutto è di fondamentale importanza gestire il flag **Operazioni incrementali**: essendo la procedura di ammortamento gestita con logiche differenti, nel caso l'azienda utilizzi l'opzione incrementale per le sue categorie sarà necessario importare questo flag al fine di individuare i dati. 

Pertanto, se sono presenti sia categorie cespiti con l'opzione incrementale, sia categorie senza l'opzione, l'ammortamento dei cespiti dovrà essere effettutato in due tempi seguendo la ricerca con e senza il flag in commento.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image01.png)

Alla base della maschera, invece, va impostato l'anno di rifermento del calcolo: normalmente sarà da modificare al fine di inserire l'anno precedente all'attuale. Non è consentito il calcolo degli ammortamenti dell'anno X quando non siano stati contabilizzati gli ammortamenti dell'anno X-1.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image02.png)

 Una volta effettuata la ricerca dei dati vediamo che è possibile, riga per riga, andare a forzare il numero di giorni di applicazione così come la percentuale d'ammortamento: si consiglia, in realtà, di effettuare il calcolo di questi casi particolari direttamente all'interno della singola scheda cespite oppure di modificare direttamente la tabella delle categorie cespiti al fine di effettuare un calcolo veloce con una selezione totale delle righe. 

Una opzione alternativa da utilizzare, se si vogliono utilizzare percentuali differenti fra i vari cespiti, può essere la definizione del **[parametro del modulo cespiti ](/docs/configurations/parameters/finance/fixed-assets-parameters)** denominato **Percentuale su singolo cespite**, che consente di definire in testata di ogni cespite una percentuale di ammortamento da utilizzare.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image03.png)



| Funzione | Significato |
| --- | --- |
| Ricerca | Ricerca la lista degli ammortamenti da calcolare. |
| Ammortamento | Esegue il calcolo per le righe selezionate. |






