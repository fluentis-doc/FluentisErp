---
title: Evasione da ordine fornitore
sidebar_position: 1
---

Nella testata del DDT, premendo il pulsante **Evasione da ordine** si aprirà la form dove è possibile filtrare gli ordini fornitori relativi al fornitore del documento.

Tramite questa procedura è possibile creare un DDT di acquisto dall'evasione del relativo ordine fornitore. E' quindi possibile inserire gli articoli all'interno del DDT, evadendo totalmente o parzialmente un intero ordine o una riga.

Per poter utilizzare questa procedura vi sono delle condizioni iniziali che devono essere rispettate:

 -  i/il fornitore degli ordini deve essere lo stesso del DDT;
 -  l'ordine che si vuole evadere deve avere attivo il flag *Stampato* e deve essere già stato *Confermato*;
 -  i tipi documento devono essere compatibili: nella tabella dei *Tipi ordini* il tipo ordine che si vuole evadere deve avere impostato il tipo DDT corrispondente, mentre nella tabella dei *Tipi DDT* deve essere presente il flag su Ordine (che indica che la DDT deriva da un ordine).

Si dovrà poi andare ad impostare nella testata della nuovo DDT, il *Tipo DDT* che si vuole creare (che deve corrispondere a quello impostato nella tabella dei *Tipi ordini*) e il *Fornitore*. Una volta inseriti questi dati, bisognerà cliccare sul pulsante *Evasione ordini* per aprire la form di evasione.

*Procedimento*:

I filtri per fornitore e divisa verranno riportati in automatico in base al fornitore selezionato nel DDT.

import ExecutionPurchaseOrder from './../../../../import/procedure/execution-purchase-order.md'

<ExecutionPurchaseOrder />