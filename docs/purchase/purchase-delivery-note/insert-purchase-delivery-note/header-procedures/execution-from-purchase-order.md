---
title: Evasione da ordine
sidebar_position: 1
---

Nella testata del DDT, premendo il pulsante **Evasione da ordine** si aprirà la form dove è possibile filtrare gli ordini fornitori relativi al fornitore del documento.

Tramite questa procedura è possibile creare un DDT di acquisto dall'evasione del relativo ordine fornitore. E' quindi possibile inserire gli articoli all'interno del DDT, evadendo totalmente o parzialmente un intero ordine o una riga.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:

 -  i/il fornitore degli ordini deve essere lo stesso del DDT;
 -  l'ordine che si vuole evadere deve avere attivo il flag *Stampato* e deve essere già stato *Confermato*.

Si dovrà poi andare ad impostare nella testata del nuovo DDT, il *Tipo DDT* che si vuole creare e il *Fornitore*. Una volta inseriti questi dati, bisognerà cliccare sul pulsante *Evasione ordini* per aprire la form di evasione.

*Procedimento*:

I filtri per fornitore e divisa verranno riportati in automatico in base al cliente selezionato nel DDT.

Nell'area di filtro è possibile scegliere se visualizzare i dati in una *Griglia*, una *Struttura gerarchica* oppure entrambe.

> La **Struttura gerarchica** permette di avere una suddivisione più chiara dei vari ordini e degli articoli contenuti in ciascuno di essi. Permette inoltre la selezione massiva tutti gli articoli contenuti all'interno di un ordine semplicemente selezionando l'ordine.    
> La **Griglia** permette una maggiore personalizzazione della form mediante aggiunta di campi da Object navigator. In questo caso la selezione massiva va effettuata mediante l'utilizzo dei tasti della tastiera e cliccando sul pulsante *Attiva/Disattiva solo righe selezionate* nella ribbon bar.

Una volta impostati tutti i *Filtri* desiderati, cliccando sul pulsante di *Ricerca* verranno visualizzati nella parte sottostante tutti gli ordini stampati, confermati e non evasi oppure evasi parzialmente.

:::note Nota
La procedura riprende tutti i dati presenti nell'ordine e come conseguenza saranno applicate le condizioni di acquisto presenti nell'ordine, anche se queste attualmente sono cambiate.   
Nel caso di evasione di più ordini aventi la stessa soluzione di pagamento e/o stessa destinazione, verranno riportate nel DDT le informazioni contenute nell'ordine; in alternativa saranno riprese quelle dell'anagrafica fornitore. 
:::

Nella griglia di risultati, l'utente ha poi la possibilità di:

 - Selezionare tutti o alcuni degli articoli proposti: per farlo basterà selezionare il flag presente all'inizio della riga articolo. La *Quantità da evadere* sarà automaticamente impostata uguale alla *Quantità residua*.
 - Selezionare alcuni articoli per una *quantità parziale*. In questo caso si dovrà andare a modificare la *Quantità da evadere*.

Per completare la procedura bisognerà poi cliccare sul pulsante *Evasione*, che andrà a riprendere tutti i dati presenti nell'ordine e li riporterà nel DDT.

*Pulsanti specifici*:

> **Ricerca**: permette di cercare gli ordini fornitore.  
> **Evasione**: permette di trasferire i dati degli ordini selezionati all'interno del nuovo DDT.  
> **Evasione forzata ordine**: permette l'evasione forzata dell'ordine o delle righe articolo selezionate.  
> **Seleziona tutto**: permette di selezionare tutti gli articoli dalla lista.  
> **Deseleziona tutti**: permette di deselezionare tutti gli articoli dalla lista.  
> **Attiva solo righe selezionate**: permette di attivare i flag per tutte le righe selezionate con il mouse.   
> **Disattiva solo righe selezionate**: permette di disattivare i flag per tutte le righe selezionate con il mouse.

:::important Ricorda
Nel caso di più evasioni parziali per una determinata riga articolo all'interno dello stesso DDT è possibile scegliere se sommare le quantità in un'unica riga nel DDT oppure se mantenere righe distinte, rispettivamente disattivando o attivando il flag **Evasione quantità articolo non sommata** nella tabella dei [Tipi DDT di acquisto](/docs/configurations/tables/purchase/purchase-delivery-notes-type/).
:::
