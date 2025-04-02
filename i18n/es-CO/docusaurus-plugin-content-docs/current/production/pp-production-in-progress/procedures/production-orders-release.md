---
title: Rilascio ordini di produzione
sidebar_position: 2
---

:::important A cosa serve
La procedura di **Rilascio degli ordini di produzione** in Fluentis permette di gestire in modo efficiente il passaggio degli ordini dallo stato *Lanciato* a *Esecutivo*. Mediante un'interfaccia intuitiva, è possibile filtrare e selezionare gli ordini da rilasciare, generando al contempo i relativi movimenti di magazzino per il prelievo automatico dei materiali. Inoltre, questa procedura consente di ripristinare ordini già rilasciati, garantendo una flessibilità operativa significativa nel processo produttivo.
:::

Questa form permette di effettuare il cambio di stato degli ordini di produzione e contemporaneamente creare anche i relativi movimenti di magazzino di scarico di tutti gli articoli che hanno, nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) dell'articolo, come *Tipo di prelievo* il valore **Automatico**.

## Filtro

In questo tab è possibile visualizzare la lista degli ordini di produzione in stato lanciato che devono essere ancora rilasciati ed è possibile filtrarli attraverso una serie di criteri di selezione. 

Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** presente nella *ribbon bar* per visualizzare i risultati all'interno della griglia di risultato.

Dopo aver individuato e selezionato gli ordini che si vogliono rilasciare, per procedere bisognerà utilizzare con il pulsante **Rilascio ordini**  presente nella *ribbon bar*, questo permetterà di variare lo stato degli ordini da *Lanciato* ad *Esecutivo* e allo stesso tempo di creare i movimenti di magazzino di scarico di tutti i materiali che hanno, nei [Parametri MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) dell'articolo, come *Tipo di prelievo* il valore **Automatico**.

## Ripristino

In questo tab è possibile eseguire la procedura di ripristino che consente di annullare il rilascio dell'ordine di produzione precedentemente effettuato, ripristinando la situazione antecedente al rilascio stesso, riportando lo stato dell'ordine di produzione a *Lanciato* ed eliminando il relativo movimento di magazzino.

Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** presente nella *ribbon bar* per visualizzare i risultati all'interno della griglia di risultato.  

Tenendo selezionata una delle righe presenti nella griglia di risultato, vengono visualizzati nella griglia sottostante i relativi movimenti di magazzino creati.

Per lanciare il ripristino, selezionare uno o più ordini e cliccare il pulsante **Ripristino**. 

Il ripristino dell'ordine di produzione è possibile solo se l'ordine di produzione generato si trova nello stato di *Esecutivo* e non sono ancora state iniziate le relative dichiarazioni di produzione; mentre nel caso in cui sia già *Evaso* non è più possibile eseguire il ripristino dell'ordine di produzione, a meno che non si proceda a ritroso partendo dal rollback della registrazione della dichiarazione di produzione.

Eseguendo questa procedura, gli ordini ripristinati saranno nuovamente visibili nel tab di **Filtro** dove sarà possibile rieseguire il rilascio.

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).