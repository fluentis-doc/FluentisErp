---
title: Ricerca
sidebar_position: 1
---

Questa form permette di ricercare le chiusure dei conti precedentemente calcolate e presenti nella base dati. 

**Da questa posizione è possibile elaborare una nuova chiusura dei conti tramite il comando  [Nuovo](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing).**

Nella zona di testata sono presenti alcuni campi per il filtro, in particolare il **numero di versione** rappresenta un numero progressivo che identifica la chiusura  stessa per ogni società presente nella base dati. Deve pertanto essere un numero univoco.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/search/image01.png)

### Come eseguire una chiusura dei conti

- Dalla presente maschera premere [**Nuovo**](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing) per creare una *Nuova* chiusura per l'anno che verrà indicato nei parametri della nuova chiusura (nella maschera che si apre)
- Nella nuova chiusura che stiamo creando inserire tutti i parametri necessari (vedere il link di cui al punto precedente)
- Calcolare i saldi tramite il comando *Ripresa valori sottoconti* (presente all'interno della nuova chiusura)
- Contabilizzare la chiusura tramite il comando *Crea registrazione per la chiusura conti* (presente all'interno della nuova chiusura)

#### Campi specifici  

**Descrizione**: liberamente assegnabile in fase di creazione della nuova chiusura;

**Data**: data di elaborazione della chiusura;

**Versione**: numero di versione della chiusura (attenzione, deve essere un numero univoco per ogni società e rappresenta in pratica un numero progressivo delle varie chiusure presenti);

**Contabilizzata**: indica se la chiusura è contabilizzata (flag attivo) oppure solo calcolata (flag non attivo);

**Note**: campo liberamente compilabile in fase di creazione della chiusura.

#### Pulsanti specifici  
> **Ricerca**: permette di la ricerca di una chiusura conti effettuata precedentemente.  
> **Nuovo**: permette di creare una nuova chiusura conti.  
> **Modifica**: attivabile dopo aver selezionato una chiusura conti, permette la modifica della registrazione di chiusura.  
> **Visualizza**: attivabile dopo aver selezionato una chiusura conti, permette la visualizzazione della registrazione di chiusura.  
> **Elimina**: attivabile dopo aver selezionato una chiusura conti, permette la cancellazione della registrazione di chiusura.  
