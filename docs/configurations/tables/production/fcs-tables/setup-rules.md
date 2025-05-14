---
title: Regole attrezzaggio
sidebar_position: 2
---

La tabella si trova sul percorso **Tabelle > Produzione > Tabelle F.C.S. > Regole attrezzaggio**.

I dati presenti in questa tabella sono utilizzati solamente nella procedura di [Schedulazione F.C.S](/docs/planning/ms-master-scheduling/fcs-scheduling). 

Questa form permette di definire le regole che consentono di calcolare il tempo di attrezzaggio delle lavorazioni da processare su una macchina per la quale sono definiti gli [Attributi di attrezzaggio](/docs/configurations/tables/production/fcs-tables/setup-property).       
Una regola di attrezzaggio può essere definita tramite più di un record di questa tabella. Ogni record permette di gestire fino a 10 attributi di attrezzaggio. Per ciascuno degli attributi definiti nel record, esiste un coefficiente moltiplicativo (di default 1) che verrà applicato al valore di transizione di stato dell'attributo.         
I valori ottenuti dopo la moltiplicazione per i coefficienti, vengono trattati secondo il tipo calcolo selezionato nel record (massimo, minimo, somma, media), ed infine il risultato è moltiplicato per il  coefficiente nel totale (default 1).      
Se la regola è definita tramite più di un record, viene eseguita la somma dei risultati di ciascun record per giungere al calcolo finale del tempo di attrezzaggio.

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Regole attrezzaggio**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Regole attrezzaggio**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. 

Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** e la **Descrizione**.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).