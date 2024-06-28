---
title: Evasione da ordine
sidebar_position: 1
---

Nella testata del DDT, premendo il pulsante **Evasione da ordine** si aprirà la form dove è possibile filtrare gli ordini relativi al cliente del documento.

Tramite questa procedura è possibile creare un DDT di vendita dall'evasione del relativo ordine cliente. E' quindi possibile inserire gli articoli all'interno del DDT, evadendo totalmente o parzialmente un intero ordine o una riga.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:

 -  i/il cliente degli ordini deve essere lo stesso del DDT;
 -  l'ordine che si vuole evadere deve avere impostato il flag *Stampato* e la *Data conferma ordine*;
 -  i tipi documento devono essere compatibili: nella tabella dei *Tipi ordini* il tipo ordine che si vuole evadere deve avere impostato il tipo DDT corrispondente, mentre nella tabella dei *Tipi DDT* deve essere presente il flag su *Ordine* (che indica che il DDT deriva da un ordine).

:::note Nota
I tipi ordine che contengono righe raggruppate non potranno essere evasi attualmente con questa procedura; di conseguenza andandoli a ricercare nella form di evasione ordini non compariranno.
:::

Si dovrà poi andare ad impostare nella testata del nuovo DDT, il *Tipo DDT* che si vuole creare (che deve corrispondere a quello impostato nella tabella dei *Tipi ordini*) e il *Cliente*. Una volta inseriti questi dati, bisognerà cliccare sul pulsante *Evasione ordini* per aprire la form di evasione.

*Procedimento*:

I filtri per cliente e divisa verranno riportati in automatico in base al cliente selezionato nel DDT.

Una volta impostati tutti i *Filtri* desiderati, cliccando sul pulsante di *Ricerca* verrà visualizzata nella griglia una riga per ciascun ordine stampato, confermato e non evaso oppure evaso parzialmente.

:::note Nota
La procedura riprende tutti i dati presenti nell'ordine e come conseguenza saranno applicate le condizioni di acquisto presenti nell'ordine, anche se queste attualmente sono cambiate.
:::

Nella griglia di risultati, l'utente ha poi la possibilità di:

 1. selezionare l'*ordine per intero*. Per farlo basterà selezionare il flag presente all'inizio della riga ordine.
 2. selezionare solo *alcuni* degli *articoli* proposti. Per farlo basterà selezionare il flag presente all'inizio della riga articolo.
 3. selezionare solo *alcuni articoli* per una *determinata quantità*. In questo caso dovrà andare a modificare la quantità da evadere.

Per completare la procedura bisognerà poi cliccare sul pulsante *Trasferimento*, che andrà a riprendere tutti i dati presenti nell'ordine e li riporterà nel DDT.

*Pulsanti specifici*:

> **Ricerca** permette di cercare gli ordini fornitore.  
> **Trasferimento** permette di trasferire i dati dell'ordine selezionato all'interno del nuovo DDT.  
> **Evasione forzata dell'ordine** permette l'evasione forzata dell'ordine.  
> **Evasione ordini** permette l'evasione dell'ordine.  
> **Espandi** permette di espandere l'intero albero degli ordini nella griglia sottostante, per visualizzare gli articoli contenuti in essi.  
> **Comprimi** permette di comprimere la visualizzazione delle righe articolo, e di far visualizzare solamente le righe ordine.  
> **Seleziona tutti** permette di selezionare tutti gli articoli dalla lista.  
> **Deseleziona tutti** permette di deselezionare tutti gli articoli dalla lista.  