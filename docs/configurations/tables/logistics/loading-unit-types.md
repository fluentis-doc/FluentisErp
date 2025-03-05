---
title: Tipi UDC
sidebar_position: 37
---

:::important A cosa serve
La tabella Tipo UDC (Unità Di Carico) di Fluentis consente di codificare e definire le varie categorie di UDC, fornendo un framework strutturato che facilita la movimentazione e la tracciabilità dei materiali. Gli utenti possono creare nuovi record, modificare quelli esistenti o cancellarli, utilizzando un'interfaccia intuitiva.

La procedura di ricerca è semplice e consente di filtrare rapidamente i tipi di UDC desiderati, visualizzando i risultati in una griglia di facile lettura. Ogni record può contenere dettagli chiave, come un codice alfanumerico univoco e una descrizione, che identificano chiaramente il tipo di unità di carico. Questa gestione efficace delle UDC è essenziale per garantire una logistica fluida e organizzata, contribuendo così a migliorare l'efficienza operativa all'interno dell'azienda.
:::

La tabella permette di gestire la codifica delle diverse tipologie di *Tipi UDC*.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Tipi UDC**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Tipi UDC**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.

*Campi specifici*

> **Tipo**: indica il codice del tipo unità di carico;    
> **Descrizione**: indica la descrizione del tipo unità di carico;    
> **Tipo gruppo**: indica il tipo del gruppo selezionato nella tabella [Tipo gruppo](/docs/configurations/tables/logistics/loading-unit-group-type/), il quale permette di definire come deve essere composto una parte del codice dell'unità di carico;      
> **Descrizione tipo gruppo**: indica la descrizione del tipo gruppo;          
> **Unità di misura dimensioni**: indica l'unità di misura in cui sono definite le dimensioni di altezza, larghezza e profondità dell'unità di carico vuota; in fase di inserimento viene proposta l'unità di misura con il flag *Unità di misura dimensioni* attivo presente nella tabella [Unità di misura](/docs/configurations/tables/general-settings/measurement-units/);     
> **Altezza / Larghezza / Profondità**: indicano rispettivamente i valori di altezza, larghezza e profondità dell'unità di carico vuota nell'unità di misura definita nel campo **Unità di misura dimensioni**;         
> **Unità di misura Peso**: indica l'unità di misura in cui è definito il peso dell'unità di carico vuota; in fase di inserimento viene proposta l'unità di misura con il flag *Unità di misura peso* attivo presente nella tabella [Unità di misura](/docs/configurations/tables/general-settings/measurement-units/);   
> **Peso**: indica il valore del peso dell'unità di carico vuota nell'unità di misura definita nel campo **Unità di misura peso**;         
**Unità di misura volume**: indica l'unità di misura in cui è definito il volume dell'unità di carico vuota; in fase di inserimento viene proposta l'unità di misura con il flag *Unità di misura volume* attivo presente nella tabella [Unità di misura](/docs/configurations/tables/general-settings/measurement-units/);       
> **Volume**: indica il valore del volume dell'unità di carico vuota nell'unità di misura definita nel campo **Unità di misura peso**; questo verrà calcolato in automatico sulla base dei valori inseriti nei campi **Altezza / Larghezza / Profondità**, ma sarà comunque modificabile manualmente;             
> **Volume variabile**: di default è attivo ed indica che il volume dell'unità di carico è variabile, quindi il volume totale varierà a seconda di che cosa e come ci verrà caricato, ad esempio un pallet; mentre se non attivo, significa che il volume dell'unità di carico non varierà come nel caso di un cassone;      
> **Tipo imballo**: permette di indicare il tipo di imballo utilizzato tra quelli inseriti nella tabella [Tipi imballo](/docs/configurations/tables/logistics/packing-type/);     
> **Descrizione tipo imballo**: indica la descrizione del tipo di imballo utilizzato;      
> **Numerazione**: indica la numerazione del tipo unità di carico.         

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).