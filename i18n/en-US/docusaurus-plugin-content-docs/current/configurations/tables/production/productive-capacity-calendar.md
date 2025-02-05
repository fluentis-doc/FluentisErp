---
title: Calendario capacità produttiva
sidebar_position: 3
---

La finestra si presenta come una tabella all'interno della quale vengono visualizzate tante caselle quanti sono i giorni del mese selezionato in alto a destra.  
Nel primo campo si troverà il **Mese** e l'**Anno** di riferimento, che potranno essere selezionati tramite la combo e il campo editabile a lato o cliccando sui pulsanti **Anno precedente/Successivo** e **Mese precedente/successivo**.

Di seguito ci sono una serie di combo, all'interno delle quali si andrà a selezionare il **Centro di lavoro** per il quale si vuole creare il calendario, la **Macchina**, il **Gruppo manodopera**.

In ogni casella è presente un flag, che, se attivato, indica che il giorno in questione è *Festivo*.  
Il fatto che un determinato giorno sia designato come *Festivo* consente all'utente di fare in modo che quando esegua la generazione del *Calendario delle capacità produttive* l'applicazione generi in automatico una disponibilità della *Risorse produttiva* solo per i giorni che nel [Calendario di Fabbrica](/docs/configurations/tables/production/factory-calendar) sono identificati come non festivi.

Oltre a questo flag, all'interno di ciascuna casella saranno visualizzabile e/o modificabile anche le *ore di capacità produttiva* di quel centro di lavoro (per quante ore al giorno lavora).

E' possibile stabilire che il centro di lavoro lavori tutti i giorni tranne i giorni festivi, e nel caso di **Eccezioni**, basterà posizionarsi nella giornata che si desidera modificare e aggiungere/togliere il flag e aggiungere/togliere le ore di lavoro.

Il calendario delle capacità produttive prevale sul calendario di fabbrica.

Una volta impostati i vari campi, basterà cliccare il pulsante **Salva**.

*Pulsante specifico*:  
> **Generazione automatica**: permette di entrare nella finestra in cui settare i vari parametri per la generazione di un calendario comune per più centri di lavoro e con parametri fissi per tutti i mesi dell'anno. Sempre grazie a questo pulsante, una volta inseriti i parametri per il calendario comune, si potrà procedere alla sua effettiva creazione.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).