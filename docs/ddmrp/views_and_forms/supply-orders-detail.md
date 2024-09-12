---
title: Dettaglio ordini di approvvigionamento/fabbisogni
sidebar_position: 5
---

Il form dettaglio ordini approvvigionamento permette di filtrare e vedere l'elenco di tutti gli ordini di approvvigionamento inevasi, di qualunque natura, sia pianificati che confermati, quello dei fabbisogni permette di filtrare e visualizzare l'elenco dei documenti inevasi che creano domanda e con un doppio click su una riga viene aperto il relativo ordine.

Nel form dei fabbisogni l'articolo visualizzato è quello impegnato, pertanto in caso di ordini di produzione e conto lavoro non è l'articolo dell'ordine. 

La sezione filtro permette di selezionare in base alla natura ordine, stato ordine, articolo etc.

Risultano particolarmente importanti quando si vuole analizzare in dettaglio la situazione ordini di un articolo, in particolar modo dall'analisi NFP.

Ogni riga è colorata secondo lo stato del buffer dell'articolo (buffer status) riferito al magazzino di versamento della riga ordine (magazzino di destinazione per gli ordini interni Ddmrp) in caso di ordini di approvvigionamento e magazzino d'impegno per gli ordini che creano fabbisogno. 

I colori sono rosso scuro per giacenza negativa, rosso per giacenza inferiore al 50% della zona rossa, giallo se la giacenza è compresa tra il 50% ed il 100% della zona rossa, verde se la giacenza è superiore alla zona rossa (limite minimo normale della giacenza) ed inferiore alla somma di zona rossa e zona verde (limite massimo normale della giacenza), blu se superiore a tale somma (giacenza eccessiva).

Se l'articolo non è un buffer nel magazzino di versamento della riga ordine, la colonna buffer status è vuota e la riga non è colorata.

Se il magazzino della riga ordine non è stato specificato verrà considerato come magazzino Fabbrica.




