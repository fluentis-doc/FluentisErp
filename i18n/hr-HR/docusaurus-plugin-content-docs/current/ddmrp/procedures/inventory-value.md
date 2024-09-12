---
title: Calcolo valore capitale investito nei buffer
sidebar_position: 4
---

Questa procedura calcola il capitale mediamente investito in una scorta a buffer.

Questo calcolo viene eseguito moltiplicando il valore della giacenza media del buffer (zona rossa + zona verde/2) per il costo unitario dell'articolo a buffer.

E' molto importante tenere presente che il calcolo del costo unitario tiene conto solo del costo dei materiali  di acquisto o di lavorazioni esterne (costi diretti e variabili), non di altri costi indiretti (costo della manodopera, di ammortamento dei macchinari etc).

Lo scopo principale di questa procedura è di verificare se la scelta di introduzione od eliminazione di un buffer porta a diminuire il valore totale del capitale investito.

Se a seguito di una scelta il valore totale del capitale investito diminuisce, la stessa è da considerare una scelta valida, altrimenti va evitata.

Se un articolo a buffer ha una distinta base, nella stessa esiste un ramo che giunge fino ai prodotti di acquisto, che rappresenta la catena dei componenti critici, cioè quella catena che determina il valore del lead time disaccoppiato (DLT) del buffer padre.

Normalmente rendendo un buffer uno di tali articoli diminuisce i valore DLT del buffer padre e di conseguenza diminuisce la giacenza media dello stesso, mentre si introduce una nuova giacenza per il nuovo buffer.

Poichè più si sale di livello nella distinta base e più cresce il costo unitario, normalmente questa azione porta ad un abbassamento della somma del valore del capitale investito totale di buffer padre e buffer figlio.

Per avere conferma o smentita di quanto appena affermato bisogna eseguire questa procedura.

Per questo calcolo si utilizzano solo i costi diretti poichè il tradizionale calcolo del costo unitario con ripartizione di costi indiretti tramite driver di costo è considerato inadatto e fuorviante per prendere decisioni.

Tale costo unitario ha valore solo per le valorizzazioni di magazzino per l'esercizio precedente per adempiere ad obblighi legislativi contabili (GAAP ovvero generally accepted accounting principles), infatti solo a consuntivo si conoscono con esattezza i volumi prodotti e quindi si può eseguire un calcolo sufficientemente attendibile del costo unitario.

