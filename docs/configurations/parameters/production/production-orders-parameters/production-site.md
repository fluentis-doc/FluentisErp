---
title: Sito Produzione
sidebar_position: 3
---

La tabella permette di gestire la codifica delle diverse tipologie di *Sito di produzione*.

Consente di inserire nuovi record o di ricercare quelli già esistenti per visualizzarli, modificarli oppure cancellarli.

## Ricerca Sito Produzione

La form si compone di un'area di filtro e da una di risultato. Una volta impostati tutti i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati all'interno della griglia di risultato.

## Inserire nuovi siti di produzione

Per inserire un nuovo sito di produzione, nella form di ricerca usare il pulsante **Nuovo**.

Nella form di inserimento, nella sezione superiore viene definito il sito produttivo tramite i campi **Codice** e **Descrizione**,  

## Modificare i siti di produzione

Per modificare i siti di produzione, nella form di ricerca selezionare il sito ed eseguire doppio clic sulla riga oppure usare il pulsante **Modifica**.

Entrando in modalità modifica, è possibile visualizzare e modificare i parametri dei relativi magazzini per quel *Sito di produzione*.      
Questi sono gli stessi presenti nei [Parametri Ordini di Produzione](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro), ma hanno priorità rispetto a quelli generali, perchè, se inserito il sito produttivo, vengono utilizzati dalle procedure al posto di quelli generali.      
Per maggiore dettagli sulle logiche e le priorità dei magazzini e delle causali impiegate, si consiglia di visualizzare la documentazione relativa ai [Parametri Ordini di Produzione](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

Il campo **Contatto** nel **Sito di Produzione** viene utilizzato nelle [Spedizioni](/docs/logistics/shipping/shippings), per proporre l'Indirizzo del luogo di carico, quando si seleziona il sito di produzione di riferimento.  

## Configurazione e funzionamento di un sito produttivo

Si riportano di seguito i passaggi necessari per una corretta configurazione ed utilizzo dei **Siti produttivi**:

1. Creazione dei sito produttivo con l'inserimento di codice e descrizione.
2. Associare il sito produttivo creato ai singoli magazzini che ne faranno parte, inserendolo nel campo *Sito produzione* della tabella [Magazzini](/docs/configurations/parameters/production/production-orders-parameters/production-site). Il sito produttivo può essere associato anche alla macchina utilizzata inserendolo nel campo *Sito produzione* della tabella [Macchine](/docs/configurations/tables/production/machines/).
3. Completare la creazione del sito produttivo inserendo anche i magazzini (scegliendo solo quelli associati a quello specifico sito) e le relative causali di carico e scarico nel come dettagliato nell'articolo dedicato ai [Parametri Ordini di Produzione](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).
4. Nella [Commessa di produzione](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders) è necessario specificare il sito produttivo nell'apposito campo della testata.
5. Le procedure di pianifcazione, per la produzione di quell'articolo, terranno conto della disponibilità sua e di quella di tutti i suoi componenti analizzando solamente i magazzini associati a quel sito produttivo e trascurando le disponibilità presenti in tutti gli altri.

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).