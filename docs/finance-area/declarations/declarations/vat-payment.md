---
title: Versamenti IVA
sidebar_position: 10
---

In questa form vengono memorizzati i risultati delle liquidazioni iva periodiche calcolate in definitivo.

:::important[Importante aggiornamento]
Dalla versione 805 vengono memorizzati i record in questa tabella **in ogni caso**, sia che si tratti di una stampa in provvisorio, sia in definitivo. La differenza è visibile tramite il flag **Definitiva** presente nella griglia.

Ogni esecuzione provvisoria della stampa aggiornerà i valori del periodo (iva a credito, iva a debito e risultato), mentre non modificherà i valori definitivi già memorizzati (evidenziati dal flag *Definitiva* attivo); la stampa provvisoria **non** aggiornerà, inoltre, i numeri di pagina né bloccherà le registrazioni contabili del periodo, operazione legata esclusivamente al processo in modalità definitiva.

Eventuali modifiche manuali ai valori della riga della tabella *Versamenti iva* sarà tracciata nei due ulteriori campi **Data ultima modifica** e **Utente ultima modifica**.

:::

Per ogni liquidazione elaborata in definitivo sarà pertanto aggiunta una riga corrispondente dal programma.

Da questa posizione è pertanto possibile procedere allo sblocco della liquidazione in definitiva semplicemente cancellando la riga corrispondente con il comando **Cancella liquidazioni IVA**.


Si ricorda che, dopo aver cancellato la riga relativa alla liquidazione periodica desiderata, è necessario procedere **anche** allo sblocco della **stampa** in definitivo del sezionale iva, sul quale la stessa è stata stampata, dalla tabella [** Registri IVA**](/docs/configurations/tables/finance/vat-books).

:::tip[Info]
Se viene utilizzato un sezionale iva separato dagli altri e specifico per le liquidazioni, lo sblocco della stampa definitiva di tale registro diventa superfluo. Pertanto si consiglia di adottare questa soluzione che rende più comodo gestire la liquidazione in definitivo mese per mese svincolandola dall'esigenza di stampare anche i sezionali, in particolare quello sul quale accodare la liquidazione, con necessità di ristampa ogni volta che si debba sbloccare la liquidazione.
::: 

ll campo Importo, risultato finale del calcolo del debito / credito IVA è editabile e pertanto è possibile, volendo, procedere ad arrotondare manualmente il valore per recepire, ad esempio, l'arrotondamento che è necessario operare nella dichiarazione annuale IVA.

![](/img/it-it/finance-area/declarations/declarations/vat-payment/image02.png)

**Liquidazione iva di gruppo:** indica che è stata eseguita la liquidazione attraverso la modalità e funzionalità del gruppo iva.


<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>



