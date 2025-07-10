---
title: Ordini interni DDMRP
sidebar_position: 4
---

Gli Ordini Interni DDMRP sono ordini emessi da una facility (qualunque facility esclusa la fabbrica), verso un'altra facility (compresa la fabbrica) che dovrà fornire la merce richiesta.

La facility richiedente agirà come cliente nei confronti della facility fornitrice che agirà appunto da fornitore.

Questi ordini hanno pertanto la duplice natura di ordini di approvvigionamento nella facility che deve ricevere la merce, e di ordini che generano fabbisogno nella facility che deve spedire la merce.

La testata ordine contiene il magazzino di destinazione, che corrisponde alla facility che deve ricevere la merce e che quindi ne fa richiesta, ed il magazzino di provenienza che corrisponde alla facility che deve fornire la merce.

Il sistema di pianificazione genera degli ordini interni pianificati a seguito del calcolo della posizione di flusso netta (NFP), che sono già completi di tutti i dati necessari e che possono essere trasformati in ordini effettivi tramite la relativa procedura (apportando eventualmente delle modifiche).

Gli ordini interni Ddmrp pianificati non generano fabbisogno nelle facilities fornitrici, solo quelli confermati generano fabbisogno.

Questa scelta fa si che le proposte d'ordine Ddmrp non generano fabbisogno nelle facility fornitrici fintanto che non vengono analizzate e trasformate in ordini effettivi dai relativi responsabili, secondo un processo di pianificazione a livelli.

Per questa ragione la fabbrica è l'unità logistica che va pianificata per ultima, dopo aver pianificato e confermato gli ordini delle unità logistiche di distribuzione e vendita merci.

Ovviamente si possono creare degli ordini interni Ddmrp manualmente senza restrizioni.

La data dell'ordine è considerata come data del fabbisogno (equivalente alla data inizio di un ordine di produzione), uguale per ciascun articolo dell'ordine, la data consegna viene invece specificata per ogni articolo dell'ordine poichè può differire.

Infatti, se la facility di destinazione viene rifornita da una facility che non è la fabbrica, il tempo di consegna degli articoli nella destinazione è lo stesso per tutti e pari al lead time inserito nella tabella delle Facilities per la facility destinazione (a meno di eccezioni stabilite nella tabella parametri Ddmrp per qualche articolo).

Se invece la facility fornitrice è la fabbrica, normalmente il DLT di ciascun articolo nella facility destinazione varia perchè è dovuto alla somma del tempo di trasporto dalla fabbrica (uguale per tutti gli articoli a buffer nell'unità di destinazione), e del DLT dell'articolo in fabbrica che è pari al tempo necessario alla sua produzione, se l'articolo non è un buffer in quest'ultima.

Per ogni articolo nell'ordine risulta visibile la quantità ordinata, spedita e ricevuta.

Quando il tempo di spedizione non è trascurabile, durante il trasporto sarà aggiornata la quantità spedita ma non quella ricevuta che verrà aggiornata solo all'atto della ricezione della merce.

Le causali di versamento e di prelievo sono specificate nella tabella delle facilities (struttura logistica).


