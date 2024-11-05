---
title: Registrazioni Contabili e Funzionalità in Contabilità generale
sidebar_position: 10
---

In ogni registrazione contabile con causale contabile che ha attivo il flag di gestione dei *Centri di costo*, avremo visibilità del tab 'Analitica' dedicato alla valorizzazione della contabilità analitica per centro di costo.

:::tip Nota
Il flag di gestione *Progetti* presente nella causale contabile si comporterà differentemente a seconda che la società abbia attivo o meno il *Controlling*: 
- se **non è attivo**, il flag renderà visibile una scheda specifica di gestione dei costi/ricavi diretti di progetto, scollegata dalla contabilità analitica
- se **è attivo**, il flag renderà visibile il campo progetti all'interno della scheda di gestione a centri di costo dell'analitica: il campo sarà editabile solo per dimensioni legate alla dimensione progetti
:::

All'interno della scheda analitica avremo la piena visibilità e disponibilità di tutte le righe valorizzate automaticamente da ***FluentisERP*** all'atto dell'inserimento della registrazione, o riportate dal documento di origine della contabilizzazione: potremo modificare gli importi, aggiungere nuove righe, eliminarne altre, secondo le logiche di configurazione della dimensione del singolo centro valorizzato, del piano dei conti e della causale.

Completata la registrazione avremo visibilità di questi dati in alcune procedure e stampe di Contabilità generale:

## PROCEDURE DI CONTABILITA' GENERALE
- procedura di ***Visualizzazione movimenti dei centri aziendali***: è una maschera di ricerca dei movimenti di analitica presenti nelle registrazioni contabili, con la possibilità di entrare in modifica della registrazione stessa

- procedura di ***Visualizzazione Bilancio con centri di costo***: consente di visualizzare i totali dei centri, ma anche per centro e sottoconto, totalizzandoli anche sulla struttura del piano dei conti

## REPORT DI CONTABILITA' GENERALE
All'interno del gruppo *Stampe analitica* abbiamo a disposizione
- stampa ***Analisi centri di costo**: consente di raggruppare i dati di movimentazione dell'analitica secondo una lista di proprietà predefinite, trascinandole nella griglia di raggruppamento

- stampa ***Analisi centri di profitto***: report è presente per retrocompatibilità, è simile alla precedente ma legge i dati dei movimetni dei *Centri di profitto*.

- stampa ***Analisi movimenti per Centri di costo***: visualizza il dettaglio delle movimentazioni dei singolo sottoconti, dettagliando su quali centri sono stati movimentati.

- stampa ***Controllo sbilanci Centri di costo/Centri di ricavo/Progetti***: nel caso di società con il *Controlling* attivo, la stampa prevede la verifica di quadratura dei soli dati di contabilità analitica dei centri di costo, filtrando per ogni specifica [*dimensione+](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension). Se siamo in una società senza attivazione del *Controlling*, invece, avremo dei flag per impostare la ricerca di squadrature dei centri di costo, dei centri di ricavo, o della sezione progetti delle registrazioni contabili