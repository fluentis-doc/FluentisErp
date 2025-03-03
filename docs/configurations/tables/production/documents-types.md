---
title: Tipi documenti
sidebar_position: 13
---

:::important A cosa serve
La tabella Tipo Documenti, permette di creare e collegare tra loto tutti i documenti che vengono gestiti all’interno delle aree di [Pianificazione](/docs/planning/planning-intro/) e [Produzione](/docs/production/production-intro/).
:::

La tabella consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

**Ricerca Tipi documento**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

**Inserimento Tipi documento**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**.

Per il nuovo record si devono inserire almeno i campi obbligatori richiesti dal programma: il **Codice** alfanumerico del tipo e la sua **Descrizione**, il **Codice standard** a cui corrisponde e il **Tipo numerazione**. Il codice standard definisce la tipologia del documento appena creato, che quindi può essere: una Commessa di produzione, un ordine cliente, ordine di conto lavoro o di produzione, oppure un ordine pianificato di acquisto, conto lavoro o produzione.

È possibile avere più documenti a parità di codice standard, quindi, tramite il flag default è possibile dire al sistema quale sia quello predefinito.     

Una volta terminato l’inserimento, per ciascuno dei documenti creati, è necessario inserire i relativi Tipo di documento generati.         
Ad esempio, nel caso di un documento di tipo commessa di produzione, l’utente dovrà inserire i documenti generati da essa, che saranno: *ordini pianificati di acquisto, ordini pianificati di produzione e ordini pianificati di conto lavoro*.  
Al loro volta gli *ordini pianificati di acquisto* genereranno un determinato tipo di *richiesta di acquisto*, mentre gli *ordini pianificati di conto lavoro* creeranno un tipo di *ordine di conto lavoro*, ed infine gli *ordini pianificati di produzione* avranno un tipo di *ordine di produzione* e anche di *conto lavoro* legato alle fasi esterne contenute nel ciclo di lavoro.

Tramite l’attivazione del flag **Manutenzione**, è possibile indicare che il documento verrà utilizzato per gli interventi di Manutenzione, mentre se disattivato verrà impiegato per la produzione.

Per i **Tipi documenti** con codice standard *CP* (Commesse di produzione) è possibile inserire il **Tipo costificazione commessa** che verrà poi proposta di default ad ogni elaborazione della costificazione della commessa. 

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).