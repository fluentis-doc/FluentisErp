---
title: Costificazione
sidebar_position: 2
---

Questa finestra si apre tramite la form di [Costificazione commesse](/docs/planning/mps-master-production-scheduling/procedures/job-orders-costing) cliccando sul pulsante **Inserisci costificazione** presente nella ribbon bar, oppure facendo doppio click con il mouse sulla **Costificazione** che si desidera visualizzare tra le quelle presenti nella griglia di risultato della form **Costificazione commesse**.

*Pulsanti specifici*:

> **Costificazione**: avvia la procedura di costificazione della commessa in base ai parametri settati;  
> **Esplodi**: permette di esplodere la struttura della commessa.

## Prima sezione a destra 

Qui si inseriscono: **Tipo commessa**, **Anno** di riferimento, **CostDate** (data alla quale si vuole costificare la commessa) e il **Tipo di costo** che si vuole utilizzare per la costificazione.

Cliccando sul pulsante **Costificazione** presente nella ribbon bar della form, si avvierà la procedura di costificazione della commessa in base ai parametri che sono stati settati sopra.

## Sezione a sinistra 

Presenta la struttura ad albero della commessa che comprende l'articolo che la compone con relativa classe, codice, quantità e UM, le eventuali lavorazioni interne ed esterne, e le richieste di acquisto con relativa classe, codice, quantità e UM.  
Per visualizzare la struttura completa della commessa basterà cliccare sugli expander presenti accanto alla commessa (![](/img/neutral/common/plus.png)) oppure cliccare sul pulsante **Esplodi** presente nella ribbon bar della form.

![](/img/it-it/planning/mps-master-production-scheduling/procedures/costing/image05.png)

## Costo

La sezione contiene una serie di voci relative ai costi della commessa nel suo complesso e delle singole parti che la compongono. Selezionando nella griglia sopra le parti che compongono la commessa, si vedranno in questa sezione tutti i relativi costi.

![](/img/it-it/planning/mps-master-production-scheduling/procedures/costing/image06.png)

Troveremo i preventivi dei costi (nella colonna evidenziata il verde si vedrà il costo unitario mentre, nella colonna evidenziata in azzurro si vedrà il costo unitario moltiplicato per la quantità che compare ella griglia per ogni parte che compone la struttura della commessa), il ricavo previsto, l'utile previsto, il costo materiali e il costo di lavorazione effettivamente sostenuto ed il totale del costo effettivo che è stato sostenuto, oltre che l'utile effettivo raggiunto che è dato dal Ricavo previsto meno il totale del costo effettivo.

Ovviamente i costi cambieranno in base alla parte della struttura che stiamo esaminando (articolo, richiesta d'acquisto etc) e i costi vengono calcolati basandosi sulla tipologia di costo che si è scelto di utilizzare inizialmente (costo medio, ultimo, standard, effettivo).

## Dettagli lavorazioni esterne, interne e materiali utilizzati

Posizionandosi su eventuali ordini di produzione presenti nella struttura della commessa, compariranno nella griglia le lavorazioni interne:  ![](/img/it-it/planning/mps-master-production-scheduling/procedures/costing/image07.png)

Posizionandosi invece sugli ordini di conto lavoro, nella griglia di destra si potranno visualizzare i dettagli delle lavorazioni esterne:  ![](/img/it-it/planning/mps-master-production-scheduling/procedures/costing/image08.png)

Per dettagli sul funzionamento comune delle form fare riferimento al link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).