---
title: Ricerca Ordini di Produzione
description: Guida alla ricerca e gestione avanzata degli ordini di produzione in Fluentis, con funzioni di generazione lotti, modifica stato e completamento dati.
sidebar_position: 2
schema: TechArticle
tags:
  - Produzione
  - Ordini
  - Pianificazione
last_update:
  author: Fluentis Documentation Team
---

# Ricerca Ordini di Produzione

:::important A cosa serve

Il modulo dedicato alla gestione degli **Ordini di Produzione** in Fluentis è progettato per supportare in modo efficiente le attività di controllo e pianificazione della produzione.  
Dalla form principale è possibile visualizzare e gestire ordini in diversi stati (ad esempio *Lanciato* o *Esecutivo*), distinguendo agevolmente tra ordini avviabili e ordini già in lavorazione.

Una delle funzionalità principali è la possibilità di creare vari lotti a partire da un singolo ordine di produzione, consentendo così una maggiore flessibilità e una gestione più precisa delle quantità da produrre. Ogni lotto può essere associato a dettagli specifici, garantendo così una tracciabilità ottimale. La gestione intuitiva degli ordini non solo semplifica il monitoraggio delle fasi di produzione, ma facilita anche l'adeguamento ai cambiamenti delle esigenze operative, rendendo Fluentis un alleato strategico per l'efficienza produttiva.
:::

Il modulo **Ordini di Produzione** consente di effettuare la ricerca e la gestione degli ordini di produzione attraverso una form dedicata.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

#### Pulsanti specifici

- **Generazione lotti**: attivo solo dopo aver selezionato un ordine, permette di creare dei lotti di produzione partendo dalla quantità dell'ordine di produzione stesso; quindi, da la possibilità di creare dei nuovi ordini di produzione con lo stesso numero principale, ma con numero lotto diverso e per ciascuno di essi permette di indicare le quantità da produrre.

Se l’ordine si trova in stato **Evaso**, si abilita anche il flag **Mantenere il riferimento alla commessa di produzione**, che permette di decidere se il nuovo lotto dell'ordine debba essere creato con il riferimento alla commessa di origine o meno; in questo caso è importante ricordare che la commessa rimarrà in stato *Evaso*, quindi se necessario, l'utente dovrà riaprirla manualmente.

:::note Nota
La quantità del lotto di origine **non può essere modificata** se sono state create delle *Liste di prelievo*, delle *Dichiarazioni di produzione*, oppure nel caso in cui alcuni materiali siano già stati consumati

È comunque possibile generare nuovi lotti, ma **senza modificare la quantità del lotto originale**.
:::

> **Seleziona progetto**: questo pulsante permette di associare un progetto agli ordini di produzione selezionati;    
> **Modifica stato ordine**: questo pulsante, che si abilita solamente dopo aver selezionato uno o più ordini, permette di variare lo stato degli ordini selezionati (Lanciato, Esecutivo, Evaso, Storicizzato);     
> **Completamento dati ordine**: questo pulsante, che si abilita solamente dopo aver selezionato uno o più ordini, permette di rigenerare i dati dell'ordine di produzione, sostituendoli con quelli presenti nella distinta base e nel ciclo di lavoro presenti in anagrafica;    
> **Ricalcolo costi Ordine di Produzione**: questo pulsante permette di effettuare il ricalcolo dei costi di produzione degli ordini di produzione selezionati;            
> **Attiva tassativo**: permette di attivare il flag **Tassativo** all'interno di tutti gli ordini di produzione selezionati;       
> **Disattiva tassativo**: permette di disattivare il flag **Tassativo** all'interno di tutti gli ordini di produzione selezionati.