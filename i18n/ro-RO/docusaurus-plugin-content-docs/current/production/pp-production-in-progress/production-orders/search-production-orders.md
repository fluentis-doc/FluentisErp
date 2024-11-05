---
title: Ricerca Ordini di Produzione
sidebar_position: 2
---

:::important A cosa serve
Il modulo per la gestione degli **Ordini di Produzione** di Fluentis è una soluzione dinamica e versatile, pensata per supportare in modo efficace il controllo e la pianificazione delle attività produttive. Direttamente dalla form principale, gli utenti possono gestire ordini in diversi stati, tra cui "Lanciato" ed "Esecutivo", permettendo una chiara distinzione tra gli ordini pronti per l'avvio e quelli già in fase di esecuzione.

Una delle funzionalità principali è la possibilità di creare vari lotti a partire da un singolo ordine di produzione, consentendo così una maggiore flessibilità e una gestione più precisa delle quantità da produrre. Ogni lotto può essere associato a dettagli specifici, garantendo così una tracciabilità ottimale. La gestione intuitiva degli ordini non solo semplifica il monitoraggio delle fasi di produzione, ma facilita anche l'adeguamento ai cambiamenti delle esigenze operative, rendendo Fluentis un alleato strategico per l'efficienza produttiva.
:::

Il modulo **Ordini di Produzione** consente di gestire gli ordini di produzione.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Pulsanti specifici*:

> **Generazione lotti**: questo pulsante, che si abilita solamente dopo aver selezionato un ordine, permette di creare dei lotti di produzione partendo dalla quantità dell'ordine di produzione stesso; quindi, da la possibilità di creare dei nuovi ordini di produzione con lo stesso numero principale, ma con numero lotto diverso e per ciascuno di essi permette di indicare le quantità da produrre;     
:::note Nota
La quantità del lotto di origine non può essere variata nel caso in cui siano già state create delle *Liste di prelievo*, delle *Dichiarazioni di produzione*, oppure nel caso in cui alcuni materiali siano già stati consumati. In questi casi è comunque possibile creare nuovi lotti di produzione, ma senza poter variare la quantità del lotto di origine.          
:::
> **Seleziona progetto**: questo pulsante permette di associare un progetto agli ordini di produzione selezionati;    
> **Ricalcola disponibilità**: questo pulsante di lanciare il calcolo della disponibilità per gli ordini di produzione selezionati;    
> **Modifica stato ordine**: questo pulsante, che si abilita solamente dopo aver selezionato uno o più ordini, permette di variare lo stato degli ordini selezionati (Lanciato, Esecutivo, Evaso, Storicizzato);     
> **Completamento dati ordine**: questo pulsante, che si abilita solamente dopo aver selezionato uno o più ordini, permette di rigenerare i dati dell'ordine di produzione, sostituendoli con quelli presenti nella distinta base e nel ciclo di lavoro presenti in anagrafica;    
> **Ricalcolo costi Ordine di Produzione**: questo pulsante permette di effettuare il ricalcolo dei costi di produzione degli ordini di produzione selezionati.    




