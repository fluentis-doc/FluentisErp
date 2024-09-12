---
title: Nuova Pipeline Flux
sidebar_position: 3
---

La form per l'inserimento di una nuova **Pipeline flux** è composta da più parti. 

Nella parte superiore si vanno a definire le seguenti informazioni:

**Codice**: è il codice della pipeline flux;

**Descrizione**: è la descrizione della pipeline flux;

**Colore rettangolo**: è il colore dello sfondo del rettangolo in cui verranno visualizzate le attività legate alla pipeline flux;

**Colore testo**: è il colore del testo del rettangolo in cui verranno visualizzate le attività legate alla pipeline flux;

**Workflow**: in questo campo si può indicare un workflow che dovrà essere legato alla pipeline flux;

**Data scadenza**: è la data di scadenza della pipeline flux.

Nella parte sottostante della form viene invece definita la microstruttura della pipeline flux.
Premendo sul pulsante ![](/img/neutral/common/new.png) Nuovo Stadio è possibile inserire un nuovo stadio della pipeline, per il quale sono presenti 2 tab necessarie per la definizione delle caratteristiche del singolo stadio.

Sono poi presenti le **tab specifiche**:

**Tab Fase Pipeline**

In questa tab vengono definite le seguenti proprietà del singolo stadio:

**Ordine Flusso**: in questo campo deve essere indicata la posizione in cui lo stadio si deve trovare all’interno della pipeline;

**Codice**: è il codice dello stadio della pipeline;

**Descrizione**: è la descrizione dello stadio della pipeline, che compare inoltre all’interno del singolo rettangolo che rappresenta graficamente lo stadio della pipeline;

**Data scadenza**: è la data scadenza dello stadio della pipeline;

**Stato Workflow**: in questo campo si può indicare a quale stato del workflow fa riferimento lo stadio della pipeline (deve essere stato indicato in precedenza un workflow nella parte superiore della form);

**Colore rettangolo**: è il colore dello sfondo del rettangolo che rappresenta lo stadio della pipeline;

**Colore testo**: è il colore del testo del rettangolo che rappresenta lo stadio della pipeline;

**Abilita transizione stadio**: questo pulsante permette di definire se debba essere possibile passare ad uno stadio successivo quando si è posizionati su questo stadio della pipeline;

**Transizione automatica**: questo pulsante permette di definire se, una volta che tutte le attività obbligatorie legate allo stadio, Fluentis debba passare automaticamente allo stadio succesivo della pipeline senza chiedere conferma all’utente.

![](/img/it-it/configurations/tables/crm/pipeline-phase.png)

**Tab Attività**

In questa tab è possibile associare le [Attività](/docs/configurations/tables/crm/activity/activity-type) allo stadio della pipeline flux.

![](/img/it-it/configurations/tables/crm/pipeline-activity.png)

Nella tabella di sinistra sono presenti le attività che è possibile associare:

![](/img/it-it/configurations/tables/crm/pipeline-activities.png)

Per associare un’attività allo stadio della pipeline è sufficiente trascinare l’attività nella tabella di destra (**Pipeline activity map**) mediante la tecnica del drag&drop.

![](/img/it-it/configurations/tables/crm/pipeline-activity-map.png)

Per ogni attività aggiunta è possibile definire i seguenti parametri:

**Tipo attività successiva**: in questo campo è possibile definire l’attività che dovrà essere automaticamente proposta come attività successiva all’inserimento di questa attività;

**Descrizione attività successiva**: è la descrizione all’attività successiva indicata in precedenza;

**Scade tra**: in questo campo devono essere indicati i giorni di scadenza dell’attività;

**Obbligatorio**: questo campo permette di definire se l’attività debba essere considerata come obbligatoria;

**In evidenza**: questo campo permette di definire se l’attività debba essere messa in evidenza rispetto alle altre attività legate allo stadio;

**Background color**: in questo campo si può definire il colore dello sfondo del rettangolo in cui viene mostrata la singola attività all’interno della pipeline flux;

**Colore testo**: in questo campo si può definire il colore del testo del rettangolo in cui viene mostrata la singola attività all’interno della pipeline flux.
