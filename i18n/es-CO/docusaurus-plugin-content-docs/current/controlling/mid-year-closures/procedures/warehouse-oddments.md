---
title: Contabilizzazione rimanenze
sidebar_position: 2
---

All'interno del modulo chiusure infrannuali, dopo aver creato una chiusura infrannuale è possibile valorizzare automaticamente le rimanenze iniziali/finali di magazzino.

Una volta aperta la maschera, andremo a gestire il range di date da utilizzare, il tipo di giacenza da considerare (*Positiva/Negativa*), il tipo di calcolo costo (*Costo medio, Costo ultimo, FIFO a Scatti Annuali, LIFO a Scatti Annuali, Area Gestionale, Da costo effettivo lotti*) e la causale contabile da utilizzare per le registrazioni da creare.
La presenza o meno del flag Controlling andrà a gestire le operazioni in due modi differenti:
- Se il flag *non è presente*, **FluentisERP** creerà le scritture delle rimanenze iniziali e quelle finali alle date di inizio e fine periodo della Chiusura infrannuale, e le inserirà in coda alle altre scritture di assestamento della chiusura stessa.
- Se il flag *è presente*, **FluentisERP** creerà le registrazioni delle rimanenze iniziali e finali di ogni singolo mese all'interno del range di date di competenza della Chiusura infrannuale, e le inserirà come Scritture extracontabili dell'Area associata alla chiusura stessa (quindi non saranno scritture della chiusura, ma scritture valide solo per il Controlling)

:::tip Nota
L'elaborazione effettua un test sulla presenza o meno di questo tipo di scritture e quindi, se le trova già presenti, chiede se le si vuole eliminare e ricreare o se le si vuole aggiungere (come nel caso in cui si dovessero selezionare solo alcuni magazzini e non tutti, attraverso la tendina disponibile). Nel caso in cui si volessero creare sia le registrazioni di Area per il controlling che quelle di Assestamento nella Chiusura, è sufficiente lanciare la procedura *prima* con il flag Controlling attivo e *poi* con il flag disattivato.
:::